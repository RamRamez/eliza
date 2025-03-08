import {AppDataSource} from "./ormconfig.ts";

export const cleanSqlQuery = (rawSqlQuery: string): string => {
    return rawSqlQuery.replace(/```sql|```/g, '').trim();
}

export async function queryRawSql(sql: string, parameters?: any[]) {
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
