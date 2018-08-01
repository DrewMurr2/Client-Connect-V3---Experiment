import { MainConfig, ResultOfMain } from './index'
import main from './index'


describe('Main', () => {
    it('Running with a test config - compiling both angular and express', () => {
        let result = main(testConfig)
        expect(result.shouldRun).toEqual(expectedResultFromTestConfig.shouldRun)
        expect(result.shouldCompileAngular).toEqual(expectedResultFromTestConfig.shouldCompileAngular)
        expect(result.shouldCompileExpressRoutes).toEqual(expectedResultFromTestConfig.shouldCompileExpressRoutes)
        expect(result.initialData).toEqual(expectedResultFromTestConfig.initialData)
    })

    it('Running with a test config - compiling set to false for both', () => {
        let result = main(testConfig_setToFalse)
        expect(result.shouldRun).toEqual(expectedResultFromTestConfig_setToFalse.shouldRun)
        expect(result.shouldCompileAngular).toEqual(expectedResultFromTestConfig_setToFalse.shouldCompileAngular)
        expect(result.shouldCompileExpressRoutes).toEqual(expectedResultFromTestConfig_setToFalse.shouldCompileExpressRoutes)
        expect(result.initialData).toEqual(expectedResultFromTestConfig_setToFalse.initialData)
    })
})

export const testConfig: MainConfig = {
    angularServiceTemplatePath: './folder_for_testing/angular.service.template.ts',
    expressRouterTemplatePath: './folder_for_testing/express.router.template.ts',
    expressApiDirectory: './folder_for_testing/express_apis_for_testing',
    expressRoutePath: './folder_for_testing/express.router.destination.ts',
    angularApiServicePath: './folder_for_testing/angular.service.destination.ts',
    shouldCompileAngular: true,
    shouldCompileExpressRoutes: true,
    placeholder: '{ { } }'
}
export const testConfig_setToFalse: MainConfig = {
    angularServiceTemplatePath: './folder_for_testing/angular.service.template.ts',
    expressRouterTemplatePath: './folder_for_testing/express.router.template.ts',
    expressApiDirectory: './folder_for_testing/express_apis_for_testing',
    expressRoutePath: './folder_for_testing/express.router.destination.ts',
    angularApiServicePath: './folder_for_testing/angular.service.destination.ts',
    shouldCompileAngular: false,
    shouldCompileExpressRoutes: false,
    placeholder: '{ { } }'
}
export const testApiObj = {
    "express_apis_for_testing":
    {
        "file_for_testing": "folder_for_testing/express_apis_for_testing/file_for_testing",
        "subfolder_for_testing":
        {
            "file_from_subfolder": "folder_for_testing/express_apis_for_testing/subfolder_for_testing/file_from_subfolder",
            "another_file_from_subfolder": "folder_for_testing/express_apis_for_testing/subfolder_for_testing/another_file_from_subfolder"
        }
    }
}

export const angularTemplateString = `Beginning of Service
{ { } }
End of Service`

export const expectedResultFromTestConfig = {
    shouldRun: true,
    shouldCompileAngular: true,
    shouldCompileExpressRoutes: true,
    initialData: {
        arrayOfPaths: [
            "folder_for_testing/express_apis_for_testing/file_for_testing",
            "folder_for_testing/express_apis_for_testing/subfolder_for_testing/another_file_from_subfolder",
            "folder_for_testing/express_apis_for_testing/subfolder_for_testing/file_from_subfolder",
        ],
        objectOfEndpoints: {
            "express_apis_for_testing": {
                "file_for_testing": "folder_for_testing/express_apis_for_testing/file_for_testing",
                "subfolder_for_testing": {
                    "another_file_from_subfolder": "folder_for_testing/express_apis_for_testing/subfolder_for_testing/another_file_from_subfolder",
                    "file_from_subfolder": "folder_for_testing/express_apis_for_testing/subfolder_for_testing/file_from_subfolder",
                },
            },
        }
    }
}
export const expectedResultFromTestConfig_setToFalse: ResultOfMain = {
    shouldRun: false,
    shouldCompileAngular: false,
    shouldCompileExpressRoutes: false,
    initialData: undefined
}