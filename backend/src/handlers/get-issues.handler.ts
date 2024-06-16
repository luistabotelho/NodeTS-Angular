import { APIGatewayProxyEventV2, APIGatewayProxyResultV2, Context } from "aws-lambda";
import { HttpRespose } from "../http/response";
import { ConnectionFactory } from "../database/connection-factory";
import { IssueQuery } from "../queries/issue.query";
import { ApiHandler } from "../directives/api-handler.directive";

export class GetIssuesHandler {
    @ApiHandler
    static async main(event: APIGatewayProxyEventV2, context: Context): Promise<APIGatewayProxyResultV2> {
        let databaseFactory = new ConnectionFactory()
        let database = await databaseFactory.getDatabase()
        let issues = await IssueQuery.getAll(database)
        return HttpRespose(issues)
    }
}