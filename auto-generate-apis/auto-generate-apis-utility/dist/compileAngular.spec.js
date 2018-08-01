"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_spec_1 = require("./index.spec");
const returnInitialData_spec_1 = require("./returnInitialData.spec");
const compileAngular_1 = __importDefault(require("./compileAngular"));
describe('Should Compile Angular Api', () => {
    let result = compileAngular_1.default(returnInitialData_spec_1.testInitialDataResult, index_spec_1.testConfig);
    it('Should Return the correct angularContents', () => {
        expect(removeWhiteSpace(result.angularContents)).toEqual(removeWhiteSpace(resultFromCompilingAngular.angularContents));
    });
    it('Should Return the correct angularTemplate', () => {
        expect(removeWhiteSpace(result.angularTemplate)).toEqual(removeWhiteSpace(resultFromCompilingAngular.angularTemplate));
    });
    it('Should Return the correct completeAngularApiServiceAsString', () => {
        expect(removeWhiteSpace(result.completeAngularApiServiceAsString)).toEqual(removeWhiteSpace(resultFromCompilingAngular.completeAngularApiServiceAsString));
    });
});
let removeWhiteSpace = (str) => str.replace(/\s+/g, '');
const resultFromCompilingAngular = {
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
    completeAngularApiServiceAsString: `Beginning of Service
{
    express_apis_for_testing: {
    file_for_testing: this.createApi('folder_for_testing/express_apis_for_testing/file_for_testing'),
    subfolder_for_testing: {
        another_file_from_subfolder: this.createApi('folder_for_testing/express_apis_for_testing/subfolder_for_testing/another_file_from_subfolder'),
        file_from_subfolder: this.createApi('folder_for_testing/express_apis_for_testing/subfolder_for_testing/file_from_subfolder')
        }
    }
}
End of Service`
};
//# sourceMappingURL=compileAngular.spec.js.map