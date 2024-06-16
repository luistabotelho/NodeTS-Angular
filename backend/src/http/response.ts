import { APIGatewayProxyResultV2 } from "aws-lambda";

export function HttpRespose(body: string | object = "", statusCode: number = 200): APIGatewayProxyResultV2 {
    if (typeof body == "object") {
        body = JSON.stringify(body)
    }
    let response: APIGatewayProxyResultV2 = {
        statusCode,
        body
    }
    console.info("Response:", response)
    return response
}