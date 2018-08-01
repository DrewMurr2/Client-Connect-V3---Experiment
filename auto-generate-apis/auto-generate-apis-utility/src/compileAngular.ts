import { InitialData, MainConfig } from './index'
import writeToFile from './shared/functions/writeToFile'
import pathToString from './shared/functions/pathToString'
export default function main(initialData: InitialData, config: MainConfig): ResultOfCompileAngularInterface {
    let angularTemplate = pathToString(config.angularServiceTemplatePath)
    let angularContents = constructAngularApiRoutesString(initialData.objectOfEndpoints)
    let completeAngularApiServiceAsString = angularTemplate.replace(config.placeholder, angularContents)
    writeToFile(config.angularApiServicePath, completeAngularApiServiceAsString)
    return {
        angularTemplate,
        angularContents,
        completeAngularApiServiceAsString
    }
}


export interface ResultOfCompileAngularInterface {
    angularTemplate: string,
    angularContents: string,
    completeAngularApiServiceAsString: string
}

function constructAngularApiRoutesString(apiObject: any): string {
    apiObject = loopThroughObjectAndEditStringProperties(apiObject)
    let stringifiedApiObject = JSON.stringify(apiObject, null, 2)
    let stringifiedApiObject_without_double_quotes = stringifiedApiObject.split('').filter(el => el !== '"').join('')

    return stringifiedApiObject_without_double_quotes
}

function loopThroughObjectAndEditStringProperties(obj: any) {
    let newObj: any = {}
    let beforePath = "this.createApi('"
    let afterPath = "')"
    for (let prop in obj) {
        if (typeof obj[prop] === 'string')
            newObj[prop] = beforePath + obj[prop] + afterPath
        else
            newObj[prop] = loopThroughObjectAndEditStringProperties(obj[prop])
    }
    return newObj
}