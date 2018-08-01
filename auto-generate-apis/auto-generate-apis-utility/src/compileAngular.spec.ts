import { InitialData, MainConfig } from './index'
import { testConfig, } from './index.spec'
import { testInitialDataResult } from './returnInitialData.spec'
import compileAngular from './compileAngular'

describe('Should Compile Angular Api', () => {
    let result = compileAngular(testInitialDataResult, testConfig)
    it('Should Return the correct angularContents', () => {
        expect(removeWhiteSpace(result.angularContents)).toEqual(removeWhiteSpace(resultFromCompilingAngular.angularContents))
    })

    it('Should Return the correct angularTemplate', () => {
        expect(removeWhiteSpace(result.angularTemplate)).toEqual(removeWhiteSpace(resultFromCompilingAngular.angularTemplate))
    })

    it('Should Return the correct completeAngularApiServiceAsString', () => {
        expect(removeWhiteSpace(result.completeAngularApiServiceAsString)).toEqual(removeWhiteSpace(resultFromCompilingAngular.completeAngularApiServiceAsString))
    })
})

let removeWhiteSpace = (str: string): string => str.replace(/\s+/g, '')


const resultFromCompilingAngular =
    {
        angularContents: `{
      express_apis_for_testing: {
            file_for_testing: this.createApi('folder_for_testing/express_apis_for_testing/file_for_testing'),
            subfolder_for_testing: {
                another_file_from_subfolder: this.createApi('folder_for_testing/express_apis_for_testing/subfolder_for_testing/another_file_from_subfolder'),
                file_from_subfolder: this.createApi('folder_for_testing/express_apis_for_testing/subfolder_for_testing/file_from_subfolder')
            }
        }
    }`,
        angularTemplate: `Beginning of Service
{ { } }
End of Service`,
        completeAngularApiServiceAsString:
        `Beginning of Service
{
    express_apis_for_testing: {
    file_for_testing: this.createApi('folder_for_testing/express_apis_for_testing/file_for_testing'),
    subfolder_for_testing: {
        another_file_from_subfolder: this.createApi('folder_for_testing/express_apis_for_testing/subfolder_for_testing/another_file_from_subfolder'),
        file_from_subfolder: this.createApi('folder_for_testing/express_apis_for_testing/subfolder_for_testing/file_from_subfolder')
        }
    }
}
End of Service`}