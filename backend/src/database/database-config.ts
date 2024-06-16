import { DataSourceOptions } from "typeorm";

export const Config = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "TypeORM",
    entities: ["./dist/backend/src/models/*.model.*"],
    migrations: ["./dist//backend/src/database/migrations/*.*"],
    synchronize: false,
    logging: false
} as DataSourceOptions