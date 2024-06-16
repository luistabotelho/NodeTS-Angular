export class ObjectHelper {
    static removeNullValues(object: {[key: string]: any}) {
        Object.keys(object).forEach(key => {
            let value = object[key]
            if (value == null) {
                delete object[key]
            }
        })
    }
}