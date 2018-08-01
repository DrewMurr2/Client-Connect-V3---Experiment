import autoGenerateApiUtitily from '../auto-generate-apis-utility'


let mainConfig: MainConfig = {
    angularServiceTemplatePath: '/Users/drewmurr/Documents/GitHub/Client-Connect-V3-Experiment/auto-generate-apis/angularTemplate.ts',
    expressRouterTemplatePath: '/Users/drewmurr/Documents/GitHub/Client-Connect-V3-Experiment/auto-generate-apis/expressRouterTemplate.ts',
    expressApiDirectory: '/Users/drewmurr/Documents/GitHub/Client-Connect-V3-Experiment/',
    expressRoutePath: '/Users/drewmurr/Documents/GitHub/Client-Connect-V3-Experiment/src/router.ts',
    angularApiServicePath: '/Users/drewmurr/Documents/GitHub/Client-Connect-V3-Experiment/angular.service.ts',
    shouldCompileAngular: true,
    shouldCompileExpressRoutes: true,
    placeholder: '{ { } }'
}

let r: ResultOfMain = autoGenerateApiUtitily(mainConfig)




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