"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('Main', () => {
    let main;
    beforeEach(() => {
        main = new index_1.Main();
    });
    describe('pathToString', () => {
        it("shoudld be a string", done => {
            let pathToString = main._pathToString;
            let contect = pathToString(exports.testConfig.angularServiceTemplatePath);
            expect(contect).toBe(exports.angularTemplateString);
            done();
        });
    });
    describe('autoGenerateApiUtitily', () => {
        it("should have the desired output", (done) => {
            let result = main.autoGenerateApiUtitily(exports.testConfig);
            expect(result).toEqual(exports.testApiObj);
            done();
        });
    });
    describe('_recursivelyFindAllPathsInADirectory', () => {
        it("Should return string array", (done) => {
            let filenames = main._recursivelyFindAllPathsInADirectory(exports.testConfig.expressApiDirectory);
            expect(filenames).toEqual(arrayOfArrayOfPaths);
            done();
        });
    });
    describe('_retrieve_api_file_names', () => {
        it('shoud', (done) => {
            let filenames = main._retrieve_api_file_names(exports.testConfig);
            expect(filenames).toEqual(arrayOfPaths);
            done();
        });
    });
    describe('_remove_ts_extensions', () => {
        it('should', (done) => {
            let filenames_without_extensions = main._remove_ts_extensions(arrayOfPaths);
            expect(filenames_without_extensions).toEqual(arrayOfPaths_without_extensions);
            done();
        });
    });
    describe('_convertArrayOfPathsToObject', () => {
        it('Should converty array of paths to object', (done) => {
            let objResult = main._convertArrayOfPathsToObject(arrayOfPaths_without_extensions);
            expect(objResult).toEqual(exports.testApiObj);
            done();
        });
    });
    const arrayOfArrayOfPaths = [
        "folder_for_testing/express_apis_for_testing/file_for_testing.ts",
        [
            "folder_for_testing/express_apis_for_testing/subfolder_for_testing/another_file_from_subfolder.ts",
            "folder_for_testing/express_apis_for_testing/subfolder_for_testing/file_from_subfolder.ts"
        ]
    ];
    const arrayOfPaths = [
        "folder_for_testing/express_apis_for_testing/file_for_testing.ts",
        "folder_for_testing/express_apis_for_testing/subfolder_for_testing/another_file_from_subfolder.ts",
        "folder_for_testing/express_apis_for_testing/subfolder_for_testing/file_from_subfolder.ts"
    ];
    const arrayOfPaths_without_extensions = [
        "folder_for_testing/express_apis_for_testing/file_for_testing",
        "folder_for_testing/express_apis_for_testing/subfolder_for_testing/another_file_from_subfolder",
        "folder_for_testing/express_apis_for_testing/subfolder_for_testing/file_from_subfolder"
    ];
});
exports.testConfig = {
    angularServiceTemplatePath: './folder_for_testing/angular.service.template.ts',
    expressRouterTemplatePath: './folder_for_testing/express.router.template.ts',
    expressApiDirectory: './folder_for_testing/express_apis_for_testing',
    expressRoutePath: './folder_for_testing/express.router.destination.ts',
    angularApiServicePath: './folder_for_testing/angular.service.destination.ts'
};
exports.testApiObj = {
    "folder_for_testing": {
        "express_apis_for_testing": {
            "file_for_testing": "folder_for_testing/express_apis_for_testing/file_for_testing",
            "subfolder_for_testing": {
                "file_from_subfolder": "folder_for_testing/express_apis_for_testing/subfolder_for_testing/file_from_subfolder",
                "another_file_from_subfolder": "folder_for_testing/express_apis_for_testing/subfolder_for_testing/another_file_from_subfolder"
            }
        }
    }
};
exports.angularTemplateString = `Beginning of Service
{ { } }
End of Service`;
//# sourceMappingURL=index.spec.js.map