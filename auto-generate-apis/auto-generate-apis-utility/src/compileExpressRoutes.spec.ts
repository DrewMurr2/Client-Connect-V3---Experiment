import { InitialData, MainConfig } from './index'
import { testConfig, } from './index.spec'
import { testInitialDataResult } from './returnInitialData.spec'
import compileExpressRoutes from './compileExpressRoutes'
import { ResultOfCompileExpress } from './compileExpressRoutes'

describe('Should Compile Express Router', () => {
    let result: ResultOfCompileExpress = compileExpressRoutes(testInitialDataResult, testConfig)
    it('Should Return the correct expressTemplate', () => {
        expect(removeWhiteSpace(result.expressTemplate)).toEqual(removeWhiteSpace(resultFromCompilingExpress.expressTemplate))
    })

    it('Should Return the correct expressContents', () => {
        expect(removeWhiteSpace(result.expressContents)).toEqual(removeWhiteSpace(resultFromCompilingExpress.expressContents))
    })

    it('Should Return the correct completeExpressRouterFileAsString', () => {
        expect(removeWhiteSpace(result.completeExpressRouterFileAsString)).toEqual(removeWhiteSpace(resultFromCompilingExpress.completeExpressRouterFileAsString))
    })
})

let removeWhiteSpace = (str: string): string => str.replace(/\s+/g, '')

const resultFromCompilingExpress: ResultOfCompileExpress =
    {
        expressContents: `app.use('/folder_for_testing/express_apis_for_testing/file_for_testing',require('./folder_for_testing/express_apis_for_testing/file_for_te
sting'));app.use('/folder_for_testing/express_apis_for_testing/subfolder_for_testing/another_file_from_subfolder',require('./folder_for_testing/e
xpress_apis_for_testing/subfolder_for_testing/another_file_from_subfolder'));app.use('/folder_for_testing/express_apis_for_testing/subfolder_for_
testing/file_from_subfolder',require('./folder_for_testing/express_apis_for_testing/subfolder_for_testing/file_from_subfolder'));`,
        expressTemplate: `Beginning of Express Routes
{ { } }
End of Express Routes`,
        completeExpressRouterFileAsString:
        `BeginningofExpressRoutesapp.use('/folder_for_testing/express_apis_for_testing/file_for_testing',require('./folder_for_testing/express_apis
_for_testing/file_for_testing'));app.use('/folder_for_testing/express_apis_for_testing/subfolder_for_testing/another_file_from_subfolder',require
('./folder_for_testing/express_apis_for_testing/subfolder_for_testing/another_file_from_subfolder'));app.use('/folder_for_testing/express_apis_fo
r_testing/subfolder_for_testing/file_from_subfolder',require('./folder_for_testing/express_apis_for_testing/subfolder_for_testing/file_from_subfo
lder'));EndofExpressRoutes`
    }