import {AppDataSource} from "./ormconfig.ts";
const { ANTHROPIC_API } = process.env;

export const cleanSqlQuery = (rawSqlQuery: string): string => {
    return rawSqlQuery?.replace(/```sql|```/g, '').trim();
}

export const queryGivethDB = async (sql: string, parameters?: any[]) => {
    try {
        await AppDataSource.initialize();
        const result = await AppDataSource.query(sql, parameters);
        await AppDataSource.destroy();
        return result;
    } catch (error) {
        console.error('Error executing raw SQL query:', error);
        await AppDataSource.destroy();
        throw error;
    }
}

export const anthropicGenerateText = async (context: string) => {
    const myHeaders = new Headers();
    myHeaders.append("x-api-key", ANTHROPIC_API);
    myHeaders.append("anthropic-version", "2023-06-01");
    myHeaders.append("content-type", "application/json");

    const raw = JSON.stringify({
        "model": "claude-3-7-sonnet-20250219",
        "max_tokens": 64000,
        "messages": [
            {
                "role": "user",
                "content": context
            }
        ]
    });

    const requestOptions: RequestInit = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    const res = await fetch("https://api.anthropic.com/v1/messages", requestOptions)
    const data = await res.json();
    console.log('------------------')
    console.log('context:', context);
    console.log('------------------')
    console.log('------------------')
    console.log('anthropicRes:', data);
    console.log('------------------')
    return data?.content[0]?.text;
}
