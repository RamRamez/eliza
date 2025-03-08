import {
    ActionExample,
    IAgentRuntime,
    Memory,
    Action,
    composeContext, generateText, ModelClass,
} from "@elizaos/core";
import {cleanSqlQuery, queryRawSql} from "../helpers/helpers.ts";
import {givethEntitiesPrompt} from "../helpers/givethEntitiesPrompt.ts";

export const queryDBAction: Action = {
    name: "QUERY_DB",
    similes: [
        "FETCH_FROM_DB",
        "RETRIEVE_DATA",
        "GET_RECORDS",
        "QUERY_DATABASE",
        "DB_QUERY",
        "DATABASE_FETCH",
        "FETCH_RECORDS",
        "RETRIEVE_FROM_DB",
        "EXECUTE_QUERY",
        "RUN_QUERY"
    ],
    validate: async (_runtime: IAgentRuntime, _message: Memory) => {
        return true;
    },
    description:
        "Query the database for information.",
    handler: async (
        _runtime: IAgentRuntime,
        _message: Memory,
        _state,
        _options,
        _callback
    ): Promise<boolean> => {
        try {
            const state = { sqlQuery: _message.content.text }
            const context = composeContext({
                state: state as any,
                template: givethEntitiesPrompt,
            });
            const rawSqlQuery = await generateText({
                runtime: _runtime,
                context,
                modelClass: ModelClass.LARGE,
            });
            await _callback({text: `Executing query: ${rawSqlQuery}`}); // Not working on web UI for some reason but working on Discord
            console.log('------------------')
            console.log("\nExecuting query: \n", rawSqlQuery);
            console.log('------------------')
            const res = await queryRawSql(cleanSqlQuery(rawSqlQuery));
            const jsonFormattedRes = "```json\n" + JSON.stringify(res, null, 2) + "\n```";
            await _callback({text: 'Query result:\n' + jsonFormattedRes});
        } catch (e) {
            console.error("queryDBAction error:", e);
            await _callback({text: `Error querying the database: ${e.message || e}`});
        }
        return true;
    },
    examples: [
        [
            {
                user: "{{user1}}",
                content: { text: "Can you fetch the latest projects?" },
            },
            {
                user: "{{user2}}",
                content: { text: "Fetching the latest projects...", action: "QUERY_DB" },
            },
        ],
        [
            {
                user: "{{user1}}",
                content: { text: "Retrieve data from the database." },
            },
            {
                user: "{{user2}}",
                content: { text: "Retrieving data from the database...", action: "QUERY_DB" },
            },
        ],
        [
            {
                user: "{{user1}}",
                content: { text: "Get records for the last month." },
            },
            {
                user: "{{user2}}",
                content: { text: "Getting records for the last month...", action: "QUERY_DB" },
            },
        ],
        [
            {
                user: "{{user1}}",
                content: { text: "Run a query to find all verified users." },
            },
            {
                user: "{{user2}}",
                content: { text: "Running query to find all verified users...", action: "QUERY_DB" },
            },
        ],
        [
            {
                user: "{{user1}}",
                content: { text: "Execute a query to get project details." },
            },
            {
                user: "{{user2}}",
                content: { text: "Executing query to get project details...", action: "QUERY_DB" },
            },
        ],
    ] as ActionExample[][],
} as Action;
