"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
describe('Main', () => {
    it('Running with a test config - compiling both angular and express', () => {
        let result = index_1.default(exports.testConfig);
        expect(result.shouldRun).toEqual(exports.expectedResultFromTestConfig.shouldRun);
        expect(result.shouldCompileAngular).toEqual(exports.expectedResultFromTestConfig.shouldCompileAngular);
        expect(result.shouldCompileExpressRoutes).toEqual(exports.expectedResultFromTestConfig.shouldCompileExpressRoutes);
        expect(result.initialData).toEqual(exports.expectedResultFromTestConfig.initialData);
    });
    it('Running with a test config - compiling set to false for both', () => {
        let result = index_1.default(exports.testConfig_setToFalse);
        expect(result.shouldRun).toEqual(exports.expectedResultFromTestConfig_setToFalse.shouldRun);
        expect(result.shouldCompileAngular).toEqual(exports.expectedResultFromTestConfig_setToFalse.shouldCompileAngular);
        expect(result.shouldCompileExpressRoutes).toEqual(exports.expectedResultFromTestConfig_setToFalse.shouldCompileExpressRoutes);
        expect(result.initialData).toEqual(exports.expectedResultFromTestConfig_setToFalse.initialData);
    });
});
exports.testConfig = {
    angularServiceTemplatePath: './folder_for_testing/angular.service.template.ts',
    expressRouterTemplatePath: './folder_for_testing/express.router.template.ts',
    expressApiDirectory: './folder_for_testing/express_apis_for_testing',
    expressRoutePath: './folder_for_testing/express.router.destination.ts',
    angularApiServicePath: './folder_for_testing/angular.service.destination.ts',
    shouldCompileAngular: true,
    shouldCompileExpressRoutes: true,
    placeholder: '{ { } }'
};
exports.testConfig_setToFalse = {
    angularServiceTemplatePath: './folder_for_testing/angular.service.template.ts',
    expressRouterTemplatePath: './folder_for_testing/express.router.template.ts',
    expressApiDirectory: './folder_for_testing/express_apis_for_testing',
    expressRoutePath: './folder_for_testing/express.router.destination.ts',
    angularApiServicePath: './folder_for_testing/angular.service.destination.ts',
    shouldCompileAngular: false,
    shouldCompileExpressRoutes: false,
    placeholder: '{ { } }'
};
exports.testApiObj = {
    "express_apis_for_testing": {
        "file_for_testing": "folder_for_testing/express_apis_for_testing/file_for_testing",
        "subfolder_for_testing": {
            "file_from_subfolder": "folder_for_testing/express_apis_for_testing/subfolder_for_testing/file_from_subfolder",
            "another_file_from_subfolder": "folder_for_testing/express_apis_for_testing/subfolder_for_testing/another_file_from_subfolder"
        }
    }
};
exports.angularTemplateString = `Beginning of Service
{ { } }
End of Service`;
exports.expectedResultFromTestConfig = {
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
};
exports.expectedResultFromTestConfig_setToFalse = {
    shouldRun: false,
    shouldCompileAngular: false,
    shouldCompileExpressRoutes: false,
    initialData: undefined
};
//# sourceMappingURL=index.spec.js.map