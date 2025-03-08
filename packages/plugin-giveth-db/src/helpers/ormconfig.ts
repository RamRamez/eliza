import { DataSource, DataSourceOptions } from 'typeorm'

const { GIVETH_POSTGRES_DB } = process.env

const ormConfig: DataSourceOptions = {
    type: 'postgres',
    url: GIVETH_POSTGRES_DB,
}

export const AppDataSource = new DataSource(ormConfig)
