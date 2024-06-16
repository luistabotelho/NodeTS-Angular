import { APIGatewayProxyEventV2 } from "aws-lambda";
import { InvalidRequestException } from "../exceptions/invalid-request.exception";

export class RequestValidator {
    /**
     * Throws an error if the body of the request is missing
     * @param request The APIGatewayProxyEventV2 from Lambda
     */
    static requireBody(
        request: APIGatewayProxyEventV2
    ): asserts request is APIGatewayProxyEventV2 & {body: NonNullable<APIGatewayProxyEventV2["body"]>} {
        if (!request.body) throw new InvalidRequestException("Missing body")
    }

    /**
     * Throws an error if one or more of the provided parameters is missing from the request query string parameters
     * @param request The APIGatewayProxyEventV2 from Lambda
     * @param parameters The query string parameters to look for
     */
    static requireParameters<Param extends string>(
        request: APIGatewayProxyEventV2,
        parameters: Param[]
    ): asserts request is APIGatewayProxyEventV2 & {queryStringParameters: {[key in Param]: string}}  {
        let missing = []

        if (!request.queryStringParameters)
            throw new InvalidRequestException(`Missing parameters: ${parameters.join(", ")}`)

        for (let parameter of parameters) {
            if (!request.queryStringParameters[parameter]) {
                missing.push(parameter)
            }
        }

        if (missing.length > 0) {
            throw new InvalidRequestException(`Missing parameters: ${missing.join(", ")}`)
        }
    }
}