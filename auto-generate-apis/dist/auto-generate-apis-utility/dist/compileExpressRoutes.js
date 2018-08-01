"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const writeToFile_1 = __importDefault(require("./shared/functions/writeToFile"));
const pathToString_1 = __importDefault(require("./shared/functions/pathToString"));
function main(initialData, config) {
    let expressTemplate = pathToString_1.default(config.expressRouterTemplatePath);
    let expressContents = constructExpressRoutes(initialData.arrayOfPaths);
    let completeExpressRouterFileAsString = expressTemplate.replace(config.placeholder, expressContents);
    writeToFile_1.default(config.expressRoutePath, completeExpressRouterFileAsString);
    return {
        expressTemplate,
        expressContents,
        completeExpressRouterFileAsString
    };
}
exports.default = main;
function constructExpressRoutes(arrayOfPaths) {
    let arrayOfRouterDeclarations = arrayOfPaths.map(path => `app.use('/${path}', require('./${path}'));
`);
    let stringOfRouterDeclarations = arrayOfRouterDeclarations.join('');
    return stringOfRouterDeclarations;
}
//# sourceMappingURL=compileExpressRoutes.js.map