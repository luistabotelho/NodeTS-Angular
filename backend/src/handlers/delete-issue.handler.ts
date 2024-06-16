import { APIGatewayProxyEventV2, Context } from "aws-lambda";
import { HttpRespose } from "../http/response";
import { ConnectionFactory } from "../database/connection-factory";
import { IssueQuery } from "../queries/issue.query";
import { ApiHandler } from "../directives/api-handler.directive";
import { RequestValidator } from "../validators/request.validator";

export class DeleteIssueHandler {
    @ApiHandler
    static async main(event: APIGatewayProxyEventV2, context: Context) {
        RequestValidator.requireParameters(event, ["id"])
        let id = event.queryStringParameters.id
        let name = event.queryStringParameters.name
        let connectionFactory = new ConnectionFactory()
        let database = await connectionFactory.getDatabase()
        let result = IssueQuery.delete(database, id)
        return HttpRespose(result)
    }
}