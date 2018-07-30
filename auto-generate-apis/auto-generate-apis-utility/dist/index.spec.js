"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('Someclass', () => {
    let aClass;
    const testConfig = {
        angularServiceTemplate: './folder_for_testing/angular.service.template.ts',
        expressRouterTemplate: './folder_for_testing/express.router.template.ts',
        expressApiDirectory: './folder_for_testing/express_apis_for_testing',
        expressRoutePath: './folder_for_testing/express.router.destination.ts',
        angularApiServicePath: './folder_for_testing/angular.service.destination.ts'
    };
    beforeEach(() => {
        aClass = new index_1.Someclass();
    });
    describe('pathToString', () => {
        it("shoudld be a string", done => {
            let pathToString = aClass._pathToString;
            let contect = pathToString('../angularTemplate.ts');
            expect(contect).toBe(current_content);
            done();
        });
    });
    describe('autoGenerateApiUtitily', () => {
        it("should have the desired output", (done) => {
            let result = aClass.autoGenerateApiUtitily(testConfig);
            expect(result).toEqual(expectedResultOfArrayOfPathsToObject);
            done();
        });
    });
    describe('_recursivelyFindAllPathsInADirectory', () => {
        it("Should return string array", (done) => {
            let filenames = aClass._recursivelyFindAllPathsInADirectory(testConfig.expressApiDirectory);
            expect(filenames).toEqual([
                "folder_for_testing/express_apis_for_testing/file_for_testing.ts",
                [
                    "folder_for_testing/express_apis_for_testing/subfolder_for_testing/another_file_from_subfolder.ts",
                    "folder_for_testing/express_apis_for_testing/subfolder_for_testing/file_from_subfolder.ts"
                ]
            ]);
            done();
        });
    });
    describe('_retrieve_api_file_names', () => {
        it('shoud', (done) => {
            let filenames = aClass._retrieve_api_file_names(testConfig);
            expect(filenames).toEqual(arrayOfPaths);
            done();
        });
    });
    describe('_convertArrayOfPathsToObject', () => {
        it('Should converty array of paths to object', (done) => {
            let objResult = aClass._convertArrayOfPathsToObject(arrayOfPaths);
            expect(objResult).toEqual(expectedResultOfArrayOfPathsToObject);
            done();
        });
    });
    const arrayOfPaths = [
        "folder_for_testing/express_apis_for_testing/file_for_testing.ts",
        "folder_for_testing/express_apis_for_testing/subfolder_for_testing/another_file_from_subfolder.ts",
        "folder_for_testing/express_apis_for_testing/subfolder_for_testing/file_from_subfolder.ts"
    ];
    const expectedResultOfArrayOfPathsToObject = {
        "folder_for_testing": { "express_apis_for_testing": { "file_for_testing.ts": "folder_for_testing/express_apis_for_testing/file_for_testing.ts",
                "subfolder_for_testing": { "file_from_subfolder.ts": "folder_for_testing/express_apis_for_testing/subfolder_for_testing/file_from_subfolder.ts",
                    "another_file_from_subfolder.ts": "folder_for_testing/express_apis_for_testing/subfolder_for_testing/another_file_from_subfolder.ts" }
            }
        }
    };
});
let current_content = `angular service



{ { } }


End angular service`;
//# sourceMappingURL=index.spec.js.map