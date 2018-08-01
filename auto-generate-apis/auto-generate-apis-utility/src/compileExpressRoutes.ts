import { InitialData, MainConfig } from './index'
import writeToFile from './shared/functions/writeToFile'
import pathToString from './shared/functions/pathToString'

export default function main(initialData: InitialData, config: MainConfig): ResultOfCompileExpress {
    let expressTemplate = pathToString(config.expressRouterTemplatePath)
    let expressContents = constructExpressRoutes(initialData.arrayOfPaths)
    let completeExpressRouterFileAsString = expressTemplate.replace(config.placeholder, expressContents)
    writeToFile(config.expressRoutePath, completeExpressRouterFileAsString)
    return {
        expressTemplate,
        expressContents,
        completeExpressRouterFileAsString
    }
}


export interface ResultOfCompileExpress {
    expressTemplate: string,
    expressContents: string,
    completeExpressRouterFileAsString: string
}

function constructExpressRoutes(arrayOfPaths: Array<string>): string {
    let arrayOfRouterDeclarations = arrayOfPaths.map(path => `app.use('/${path}', require('./${path}'));
`)
    let stringOfRouterDeclarations = arrayOfRouterDeclarations.join('')
    return stringOfRouterDeclarations
}