import { APIGatewayProxyEventV2, Context } from "aws-lambda";
import { IssueQuery } from "../queries/issue.query";
import { HttpRespose } from "../http/response";
import { ConnectionFactory } from "../database/connection-factory";
import { ApiHandler } from "../directives/api-handler.directive";
import { RequestValidator } from "../validators/request.validator";
import { ObjectHelper } from "@core/helpers/object.helper";

export class SaveIssueHandler {
    @ApiHandler
    static async main(event: APIGatewayProxyEventV2, context: Context) {
        RequestValidator.requireBody(event)
        let body = JSON.parse(event.body)
        ObjectHelper.removeNullValues(body)
        let connectionFactory = new ConnectionFactory()
        let database = await connectionFactory.getDatabase()
        let result = await IssueQuery.save(database, body)
        return HttpRespose(result)
    }
}