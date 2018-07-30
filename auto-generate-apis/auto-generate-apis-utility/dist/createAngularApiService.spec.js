"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createAngularApiService_1 = require("./createAngularApiService");
const index_spec_1 = require("./index.spec");
describe('CreateAngularApiService', () => {
    let angularApiServicePath = index_spec_1.testConfig.angularApiServicePath;
    let testCreateAngularApiService;
    beforeEach(() => {
        testCreateAngularApiService = new createAngularApiService_1.CreateAngularService(index_spec_1.angularTemplateString, angularApiServicePath, index_spec_1.testApiObj);
    });
    describe('CreateAngularApiService', () => {
        it('should pass first test', () => {
            expect(1).toBe(1);
        });
        it('angularApiRoutesString should return the string which will be inserted into the template', () => {
            expect(testCreateAngularApiService.angularApiRoutesString).toBe(resultOfConstructAngularApiRoutesString);
        });
        it('angularApiServiceString should return the angularApiRoutesString inserted into the template', () => {
            expect(testCreateAngularApiService.angularApiServiceString).toBe(testAngularApiServiceString);
        });
        it('should save file to destination', () => {
            expect(testCreateAngularApiService.saveFile('', '')).toBe(1);
        });
    });
});
const resultOfConstructAngularApiRoutesString = "{folder_for_testing:{express_apis_for_testing:{file_for_testing:this.createApi('folder_for_testing/express_apis_for_testing/file_for_testing'),subfolder_for_testing:{file_from_subfolder:this.createApi('folder_for_testing/express_apis_for_testing/subfolder_for_testing/file_from_subfolder'),another_file_from_subfolder:this.createApi('folder_for_testing/express_apis_for_testing/subfolder_for_testing/another_file_from_subfolder')}}}}";
const testAngularApiServiceString = `Beginning of Service
{folder_for_testing:{express_apis_for_testing:{file_for_testing:this.createApi('folder_for_testing/express_apis_for_testing/file_for_testing'),subfolder_for_testing:{file_from_subfolder:this.createApi('folder_for_testing/express_apis_for_testing/subfolder_for_testing/file_from_subfolder'),another_file_from_subfolder:this.createApi('folder_for_testing/express_apis_for_testing/subfolder_for_testing/another_file_from_subfolder')}}}}
End of Service`;
//# sourceMappingURL=createAngularApiService.spec.js.map