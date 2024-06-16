import { APIGatewayProxyEventV2, Context } from "aws-lambda"
import { InvalidRequestException } from "../exceptions/invalid-request.exception"
import { NotFoundException } from "../exceptions/not-found.exception"
import { HttpRespose } from "../http/response"
import { QueryFailedError } from "typeorm"

export function ApiHandler(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let originalMethod = descriptor.value

    descriptor.value = async function (...args: any[]) {
        try{
            return await originalMethod.apply(this, args)
        } catch (error) {
            console.error(error)
            if (error instanceof InvalidRequestException) {
                return HttpRespose(`Invalid Request: ${error.message}`, 400)
            }
            if (error instanceof NotFoundException) {
                return HttpRespose("Not Found", 404)
            }
            if (error instanceof QueryFailedError) {
                return HttpRespose(`Invalid request: ${error.message}`)
            }
            return HttpRespose("Internal Error. Contact support for more information.", 500)
        }
    }

    return descriptor
}