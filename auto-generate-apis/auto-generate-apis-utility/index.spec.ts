import { Main, MainConfig } from './index'

describe('Main', () => {

    let main: Main


    beforeEach(() => {
        main = new Main()
    })


    describe('pathToString', () => {
        it("shoudld be a string", done => {
            let pathToString = main._pathToString
            let contect = pathToString(testConfig.angularServiceTemplatePath)
            expect(contect).toBe(angularTemplateString)
            done()
        })
    })



    describe('autoGenerateApiUtitily', () => {
        it("should have the desired output", (done) => {
            let result = main.autoGenerateApiUtitily(testConfig)
            expect(result).toEqual(testApiObj)
            done()
        })
    })

    describe('_recursivelyFindAllPathsInADirectory', () => {
        it("Should return string array", (done) => {
            let filenames = main._recursivelyFindAllPathsInADirectory(testConfig.expressApiDirectory)
            expect(filenames).toEqual(arrayOfArrayOfPaths)
            done()
        })
    })

    describe('_retrieve_api_file_names', () => {
        it('shoud', (done) => {
            let filenames = main._retrieve_api_file_names(testConfig)
            expect(filenames).toEqual(arrayOfPaths)
            done()
        })
    })

    describe('_remove_ts_extensions', () => {
        it('should', (done) => {
            let filenames_without_extensions = main._remove_ts_extensions(arrayOfPaths)
            expect(filenames_without_extensions).toEqual(arrayOfPaths_without_extensions)
            done()
        })
    })

    describe('_convertArrayOfPathsToObject', () => {
        it('Should converty array of paths to object', (done) => {
            let objResult = main._convertArrayOfPathsToObject(arrayOfPaths_without_extensions)
            expect(objResult).toEqual(testApiObj)
            done()
        })
    })

    const arrayOfArrayOfPaths = [
        "folder_for_testing/express_apis_for_testing/file_for_testing.ts",
        [
            "folder_for_testing/express_apis_for_testing/subfolder_for_testing/another_file_from_subfolder.ts",
            "folder_for_testing/express_apis_for_testing/subfolder_for_testing/file_from_subfolder.ts"
        ]
    ]

    const arrayOfPaths = [
        "folder_for_testing/express_apis_for_testing/file_for_testing.ts",
        "folder_for_testing/express_apis_for_testing/subfolder_for_testing/another_file_from_subfolder.ts",
        "folder_for_testing/express_apis_for_testing/subfolder_for_testing/file_from_subfolder.ts"
    ]

    const arrayOfPaths_without_extensions = [
        "folder_for_testing/express_apis_for_testing/file_for_testing",
        "folder_for_testing/express_apis_for_testing/subfolder_for_testing/another_file_from_subfolder",
        "folder_for_testing/express_apis_for_testing/subfolder_for_testing/file_from_subfolder"
    ]
})
export const testConfig: MainConfig = {
    angularServiceTemplatePath: './folder_for_testing/angular.service.template.ts',
    expressRouterTemplatePath: './folder_for_testing/express.router.template.ts',
    expressApiDirectory: './folder_for_testing/express_apis_for_testing',
    expressRoutePath: './folder_for_testing/express.router.destination.ts',
    angularApiServicePath: './folder_for_testing/angular.service.destination.ts'
}
export const testApiObj = {
    "folder_for_testing":
    {
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
}

export const angularTemplateString = `Beginning of Service
{ { } }
End of Service`