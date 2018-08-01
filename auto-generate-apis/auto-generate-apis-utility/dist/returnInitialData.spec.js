"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const returnInitialData_1 = __importDefault(require("./returnInitialData"));
const index_spec_1 = require("./index.spec");
describe('Return Initial Data', () => {
    let result = returnInitialData_1.default(index_spec_1.testConfig);
    it("Should return the right Array of paths", done => {
        expect(result.arrayOfPaths).toEqual(exports.testInitialDataResult.arrayOfPaths);
        done();
    });
    it("Should return the right object Of Endpoints", done => {
        expect(result.objectOfEndpoints).toEqual(exports.testInitialDataResult.objectOfEndpoints);
        done();
    });
});
exports.testInitialDataResult = {
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
};
//# sourceMappingURL=returnInitialData.spec.js.map