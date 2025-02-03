// ================ IMPORTS ================
import { createOpenAI } from "@ai-sdk/openai";
import {
    experimental_generateImage as aiGenerateImage,
    generateObject as aiGenerateObject,
    generateText as aiGenerateText,
    type StepResult as AIStepResult,
    type CoreTool,
    type GenerateObjectResult,
} from "ai";
import { z, type ZodSchema } from "zod";
import { elizaLogger, logFunctionCall } from "./index.ts";
import {
    parseJSONObjectFromText
} from "./parsing.ts";
import settings from "./settings.ts";
import {
    type ActionResponse,
    type Content,
    type IAgentRuntime,
    type IImageDescriptionService,
    type IVerifiableInferenceAdapter,
    type ModelClass,
    ServiceType,
    type TelemetrySettings,
    type VerifiableInferenceOptions,
    type VerifiableInferenceResult
} from "./types.ts";



// ================ TYPE DEFINITIONS ================
type Tool = CoreTool<any, any>;
type StepResult = AIStepResult<any>;


interface ModelSettings {
    prompt: string;
    temperature: number;
    maxTokens: number;
    frequencyPenalty: number;
    presencePenalty: number;
    stop?: string[];
    experimental_telemetry?: TelemetrySettings;
}


interface VerifiedInferenceOptions {
    verifiableInference?: boolean;
    verifiableInferenceAdapter?: IVerifiableInferenceAdapter;
    verifiableInferenceOptions?: VerifiableInferenceOptions;
}

interface GenerateObjectOptions extends VerifiedInferenceOptions {
    runtime: IAgentRuntime;
    context: string;
    modelClass: ModelClass;
    output?: 'object' | 'array' | 'enum' | 'no-schema' | undefined;
    schema?: ZodSchema;
    schemaName?: string;
    schemaDescription?: string;
    stop?: string[];
    mode?: 'auto' | 'json' | 'tool';
    enum?: string[];
}

// ================ COMMON UTILITIES ================
interface RetryOptions {
    maxRetries?: number;
    initialDelay?: number;
    maxDelay?: number;
    shouldRetry?: (error: any) => boolean;
}

async function withRetry<T>(
    operation: () => Promise<T>,
    options: RetryOptions = {}
): Promise<T> {
    const {
        maxRetries = 3,
        initialDelay = 1000,
        maxDelay = 8000,
        shouldRetry = (error: any) => !(error instanceof TypeError || error instanceof SyntaxError),
    } = options;

    let retryCount = 0;
    let retryDelay = initialDelay;

    while (true) {
        try {
            return await operation();
        } catch (error) {
            retryCount++;
            elizaLogger.error(`Operation failed (attempt ${retryCount}/${maxRetries}):`, error);

            if (!shouldRetry(error) || retryCount >= maxRetries) {
                throw error;
            }

            retryDelay = Math.min(retryDelay * 2, maxDelay);
            elizaLogger.debug(`Retrying in ${retryDelay}ms...`);
            await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
    }
}

function initializeModelClient(runtime: IAgentRuntime, imageModel?: boolean) {
    const serverUrl = runtime.getModelProvider().endpoint;
    const apiKey = runtime.token;
    const model = 
    imageModel ?
    runtime.getModelProvider().imageModel : 
    runtime.getModelProvider().defaultModel;
    
    const client = createOpenAI({
        apiKey,
        baseURL: serverUrl,
        fetch: runtime.fetch,
    });

    return {
        client,
        model,
        systemPrompt: runtime.character.system ?? settings.SYSTEM_PROMPT ?? undefined
    };
}

function validateContext(context: string, functionName: string): void {
    if (!context) {
        const errorMessage = `${functionName} context is empty`;
        elizaLogger.error(errorMessage);
        throw new Error(errorMessage);
    }
}

// ================ TEXT GENERATION FUNCTIONS ================
export async function generateText({
    runtime,
    context,
    modelClass,
    tools = {},
    onStepFinish,
    maxSteps = 1,
    stop,
    verifiableInference = process.env.VERIFIABLE_INFERENCE_ENABLED === "true",
    verifiableInferenceOptions,
}: {
    runtime: IAgentRuntime;
    context: string;
    modelClass: ModelClass;
    tools?: Record<string, Tool>;
    onStepFinish?: (event: StepResult) => Promise<void> | void;
    maxSteps?: number;
    stop?: string[];
    customSystemPrompt?: string;
    verifiableInference?: boolean;
    verifiableInferenceAdapter?: IVerifiableInferenceAdapter;
    verifiableInferenceOptions?: VerifiableInferenceOptions;
}): Promise<string> {
    logFunctionCall('generateText', runtime);
    validateContext(context, 'generateText');

    elizaLogger.info("Generating text with options:", {
        modelProvider: runtime.modelProvider,
        model: modelClass,
        verifiableInference,
    });

    if (verifiableInference && runtime.verifiableInferenceAdapter) {
        return await handleVerifiableInference(runtime, context, modelClass, verifiableInferenceOptions);
    }

    const { client, model, systemPrompt } = initializeModelClient(runtime);

    const { text } = await aiGenerateText({
        model: client.languageModel(model),
        prompt: context,
        system: systemPrompt,
        tools,
        onStepFinish,
        maxSteps
    });

    return text;
}

async function handleVerifiableInference(
    runtime: IAgentRuntime,
    context: string,
    modelClass: ModelClass,
    options?: VerifiableInferenceOptions
): Promise<string> {
    elizaLogger.log(
        "Using verifiable inference adapter:",
        runtime.verifiableInferenceAdapter
    );
    
    try {
        const result: VerifiableInferenceResult =
            await runtime.verifiableInferenceAdapter.generateText(
                context,
                modelClass,
                options
            );
        
        elizaLogger.log("Verifiable inference result:", result);
        
        const isValid = await runtime.verifiableInferenceAdapter.verifyProof(result);
        if (!isValid) {
            throw new Error("Failed to verify inference proof");
        }

        return result.text;
    } catch (error) {
        elizaLogger.error("Error in verifiable inference:", error);
        throw error;
    }
}

export async function generateTextArray({
    runtime,
    context,
    modelClass,
}: {
    runtime: IAgentRuntime;
    context: string;
    modelClass: ModelClass;
}): Promise<string[]> {
    logFunctionCall('generateTextArray', runtime);
    validateContext(context, 'generateTextArray');
    
    return await withRetry(async () => {
        const {object} = await generateObject({
            runtime,
            context,
            modelClass,
            output: "array",
        });
        elizaLogger.debug("Received response from generateObject:", object);
        return object as string[];
    });
}

// ================ ENUM GENERATION FUNCTIONS ================
async function generateEnum<T extends string>({
    runtime,
    context,
    modelClass,
    enumValues,
    functionName,
}: {
    runtime: IAgentRuntime;
    context: string;
    modelClass: ModelClass;
    enumValues: readonly T[];
    functionName: string;
}): Promise<T | null> {
    logFunctionCall(functionName, runtime);
    validateContext(context, functionName);

    return await withRetry(async () => {
        elizaLogger.debug(
            "Attempting to generate enum value with context:",
            context
        );
        const { object } = await generateObject({
            runtime,
            context,
            modelClass,
            output: 'enum',
            enum: [...enumValues],
            schema: z.enum(enumValues as [T, ...T[]]),
        });

        elizaLogger.debug("Received enum response:", object);
        return object as T;
    });
}

export async function generateShouldRespond({
    runtime,
    context,
    modelClass,
}: {
    runtime: IAgentRuntime;
    context: string;
    modelClass: ModelClass;
}): Promise<"RESPOND" | "IGNORE" | "STOP" | null> {
    const RESPONSE_VALUES = ['RESPOND', 'IGNORE', 'STOP'] as const;
    type ResponseType = typeof RESPONSE_VALUES[number];

    return generateEnum<ResponseType>({
        runtime,
        context,
        modelClass,
        enumValues: RESPONSE_VALUES,
        functionName: 'generateShouldRespond'
    });
}

export async function generateTrueOrFalse({
    runtime,
    context = "",
    modelClass,
}: {
    runtime: IAgentRuntime;
    context: string;
    modelClass: ModelClass;
}): Promise<boolean> {
    logFunctionCall('generateTrueOrFalse', runtime);
    
    const BOOL_VALUES = ['true', 'false'] as const;
    type BoolString = typeof BOOL_VALUES[number];
    
    const result = await generateEnum<BoolString>({
        runtime,
        context,
        modelClass,
        enumValues: BOOL_VALUES,
        functionName: 'generateTrueOrFalse'
    });
    
    return result === 'true';
}

// ================ OBJECT GENERATION FUNCTIONS ================
export const generateObject = async ({
    runtime,
    context,
    output,
    modelClass,
    mode,
    schema,
    schemaName,
    schemaDescription,
    stop,
    verifiableInference,
    verifiableInferenceAdapter,
    verifiableInferenceOptions,
}: GenerateObjectOptions): Promise<GenerateObjectResult<unknown>> => {
    logFunctionCall('generateObject', runtime);
    if (!context) {
        const errorMessage = "generateObject context is empty";
        console.error(errorMessage);
        throw new Error(errorMessage);
    }

    elizaLogger.debug(`Generating object with ${runtime.modelProvider} model. for ${schemaName}`);
    const { client, model } = initializeModelClient(runtime);

    // If schema is provided, use object output type with schema
    const result = aiGenerateObject({
        model: client.languageModel(model),
        prompt: context.toString(),
        system: runtime.character.system ?? settings.SYSTEM_PROMPT ?? undefined,
        schema,
        schemaName,
        schemaDescription,
        mode,
        stop,
    })

    elizaLogger.debug(`Received Object response from ${model} model.`);
    
    return result;
};

export async function generateObjectDeprecated({
    runtime,
    context,
    modelClass,
}: {
    runtime: IAgentRuntime;
    context: string;
    modelClass: ModelClass;
}): Promise<GenerateObjectResult<unknown>> {
    logFunctionCall('generateObjectDeprecated', runtime);
    return generateObject({
        runtime,
        context,
        modelClass,
    });
}

export async function generateObjectArray({
    runtime,
    context,
    modelClass,
}: {
    runtime: IAgentRuntime;
    context: string;
    modelClass: ModelClass;
}): Promise<Array<any>> {
    logFunctionCall('generateObjectArray', runtime);
    if (!context) {
        elizaLogger.error("generateObjectArray context is empty");
        return [];
    }
    const result = await generateObject({
        runtime,
        context,
        modelClass,
        output: "array",
    });
    return Array.isArray(result.object) ? result.object : [];
}


export async function generateMessageResponse({
    runtime,
    context,
    modelClass,
}: {
    runtime: IAgentRuntime;
    context: string;
    modelClass: ModelClass;
}): Promise<Content> {
    logFunctionCall('generateMessageResponse', runtime);
    validateContext(context, 'generateMessageResponse');
    elizaLogger.debug("Context:", context);

    return await withRetry(async () => {
        const { client, model, systemPrompt } = initializeModelClient(runtime);
        
        const {text} = await aiGenerateText({
            model: client.languageModel(model),
            prompt: context,
            system: systemPrompt,
        });

        const parsedContent = parseJSONObjectFromText(text) as Content;
        if (!parsedContent) {
            throw new Error("Failed to parse content");
        }

        return parsedContent;
    });
}


// ================ IMAGE-RELATED FUNCTIONS ================
export const generateImage = async (
    data: {
        prompt: string;
        width: number;
        height: number;
        count?: number;
        negativePrompt?: string;
        numIterations?: number;
        guidanceScale?: number;
        seed?: number;
        modelId?: string;
        jobId?: string;
        stylePreset?: string;
        hideWatermark?: boolean;
        safeMode?: boolean;
        cfgScale?: number;
    },
    runtime: IAgentRuntime
): Promise<{
    success: boolean;
    data?: string[];
    error?: any;
}> => {
    logFunctionCall('generateImage', runtime);
    const modelSettings = runtime.imageModelProvider;

    if (!modelSettings) {
        elizaLogger.warn("No model settings found for the image model provider.");
        return { success: false, error: "No model settings available" };
    }
    const { model, client } = initializeModelClient(runtime, true);
    elizaLogger.info("Generating image with options:", {
        imageModelProvider: model,
    });

    await withRetry(async () => {
        const result = await aiGenerateImage({
            model: client.imageModel(model),
            prompt: data.prompt,
            size: `${data.width}x${data.height}`,
            n: data.count,
            seed: data.seed
        });

        return {
            success: true,
            data: result.images,
            error: undefined
        };
    }, {
        maxRetries: 2,
        initialDelay: 2000
    });
};


export const generateCaption = async (
    data: { imageUrl: string },
    runtime: IAgentRuntime
): Promise<{
    title: string;
    description: string;
}> => {
    logFunctionCall('generateCaption', runtime);
    const { imageUrl } = data;
    const imageDescriptionService =
        runtime.getService<IImageDescriptionService>(
            ServiceType.IMAGE_DESCRIPTION
        );

    if (!imageDescriptionService) {
        throw new Error("Image description service not found");
    }

    const resp = await imageDescriptionService.describeImage(imageUrl);
    return {
        title: resp.title.trim(),
        description: resp.description.trim(),
    };
};


export async function generateTweetActions({
    runtime,
    context,
    modelClass,
}: {
    runtime: IAgentRuntime;
    context: string;
    modelClass: ModelClass;
}): Promise<ActionResponse | null> {
    try {
        const BOOL_VALUES = ['true', 'false'] as const;
        type BoolString = typeof BOOL_VALUES[number];

        // Generate each action using generateEnum
        const like = await generateEnum<BoolString>({
            runtime,
            context: `${context}\nShould I like this tweet?`,
            modelClass,
            enumValues: BOOL_VALUES,
            functionName: 'generateTweetActions_like'
        });

        const retweet = await generateEnum<BoolString>({
            runtime,
            context: `${context}\nShould I retweet this tweet?`,
            modelClass,
            enumValues: BOOL_VALUES,
            functionName: 'generateTweetActions_retweet'
        });

        const quote = await generateEnum<BoolString>({
            runtime,
            context: `${context}\nShould I quote this tweet?`,
            modelClass,
            enumValues: BOOL_VALUES,
            functionName: 'generateTweetActions_quote'
        });

        const reply = await generateEnum<BoolString>({
            runtime,
            context: `${context}\nShould I reply to this tweet?`,
            modelClass,
            enumValues: BOOL_VALUES,
            functionName: 'generateTweetActions_reply'
        });

        if (!like || !retweet) {
            elizaLogger.debug("Required tweet actions missing");
            return null;
        }

        return {
            like: like === 'true',
            retweet: retweet === 'true',
            quote: quote === 'true',
            reply: reply === 'true'
        };
    } catch (error) {
        elizaLogger.error("Error in generateTweetActions:", error);
        return null;
    }
}






