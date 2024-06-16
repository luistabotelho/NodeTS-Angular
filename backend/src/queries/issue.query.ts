import { DataSource } from "typeorm";
import { Issue } from "../models/issue.model";

export class IssueQuery {
    static getAll(database: DataSource) {
        return database.manager.find(Issue)
    }

    static save(database: DataSource, issue: Issue) {
        return database.manager.save(Issue, issue)
    }

    static delete(database: DataSource, id: typeof Issue.prototype.id) {
        return database.manager.delete(Issue, {
            id: id
        })
    }
}