import { CreateAngularService } from './createAngularApiService'
import { testApiObj, angularTemplateString, testConfig } from './index.spec'

describe('CreateAngularApiService', () => {
    let angularApiServicePath = testConfig.angularApiServicePath
    let testCreateAngularApiService: CreateAngularService
    beforeEach(() => {
        testCreateAngularApiService = new CreateAngularService(angularTemplateString, angularApiServicePath, testApiObj)
    })


    describe('CreateAngularApiService', () => {
        it('should pass first test', () => {
            expect(1).toBe(1)
        })

        it('angularApiRoutesString should return the string which will be inserted into the template', () => {
            expect(testCreateAngularApiService.angularApiRoutesString).toBe(resultOfConstructAngularApiRoutesString)
        })

        it('angularApiServiceString should return the angularApiRoutesString inserted into the template', () => {
            expect(testCreateAngularApiService.angularApiServiceString).toBe(testAngularApiServiceString)
        })

        it('should save file to destination', () => {
            expect(testCreateAngularApiService.saveFile('', '')).toBe(1)
        })
    })



})

const resultOfConstructAngularApiRoutesString = "{folder_for_testing:{express_apis_for_testing:{file_for_testing:this.createApi('folder_for_testing/express_apis_for_testing/file_for_testing'),subfolder_for_testing:{file_from_subfolder:this.createApi('folder_for_testing/express_apis_for_testing/subfolder_for_testing/file_from_subfolder'),another_file_from_subfolder:this.createApi('folder_for_testing/express_apis_for_testing/subfolder_for_testing/another_file_from_subfolder')}}}}"
const testAngularApiServiceString =
    `Beginning of Service
{folder_for_testing:{express_apis_for_testing:{file_for_testing:this.createApi('folder_for_testing/express_apis_for_testing/file_for_testing'),subfolder_for_testing:{file_from_subfolder:this.createApi('folder_for_testing/express_apis_for_testing/subfolder_for_testing/file_from_subfolder'),another_file_from_subfolder:this.createApi('folder_for_testing/express_apis_for_testing/subfolder_for_testing/another_file_from_subfolder')}}}}
End of Service`

