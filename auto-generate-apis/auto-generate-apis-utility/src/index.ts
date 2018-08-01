import * as fs from 'fs'
import * as path from 'path'
import returnInitialData from './returnInitialData'
import compileAngular from './compileAngular'
import compileExpressRoutes from './compileExpressRoutes'


export default function main(config: MainConfig): ResultOfMain {
    let { shouldCompileAngular, shouldCompileExpressRoutes } = config
    let shouldRun = shouldCompileAngular || shouldCompileExpressRoutes
    let initialData
    if (shouldRun) {
        initialData = returnInitialData(config)
        if (shouldCompileAngular) compileAngular(initialData, config)
        if (shouldCompileExpressRoutes) compileExpressRoutes(initialData, config)
    }
    return {
        shouldRun,
        shouldCompileAngular,
        shouldCompileExpressRoutes,
        initialData
    }
}

export interface ResultOfMain {
    shouldRun: boolean,
    shouldCompileAngular: boolean,
    shouldCompileExpressRoutes: boolean,
    initialData?: InitialData
}

export interface InitialData {
    arrayOfPaths: Array<string>,
    objectOfEndpoints: any
}

export interface MainConfig {
    angularServiceTemplatePath: string,
    expressRouterTemplatePath: string,
    expressApiDirectory: string,
    expressRoutePath: string,
    angularApiServicePath: string,
    shouldCompileAngular: boolean,
    shouldCompileExpressRoutes: boolean,
    placeholder: string
}




