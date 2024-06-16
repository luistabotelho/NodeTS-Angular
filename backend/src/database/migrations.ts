import { DataSource } from "typeorm";
import { Config } from "./database-config";

const dataSource = new DataSource(Config)
dataSource.initialize()
export default dataSource