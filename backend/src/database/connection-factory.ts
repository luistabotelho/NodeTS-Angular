import { DataSource } from "typeorm";
import { Config } from "./database-config";

export class ConnectionFactory {
    source: DataSource | null = null

    async getDatabase() {
        if (!this.source) {
            let dataSource = new DataSource(Config)
            await dataSource.initialize()
            this.source = dataSource
        }

        return this.source
    }
}