"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const writeToFile_1 = __importDefault(require("./shared/functions/writeToFile"));
const pathToString_1 = __importDefault(require("./shared/functions/pathToString"));
function main(initialData, config) {
    let angularTemplate = pathToString_1.default(config.angularServiceTemplatePath);
    let angularContents = constructAngularApiRoutesString(initialData.objectOfEndpoints);
    let completeAngularApiServiceAsString = angularTemplate.replace(config.placeholder, angularContents);
    writeToFile_1.default(config.angularApiServicePath, completeAngularApiServiceAsString);
    return {
        angularTemplate,
        angularContents,
        completeAngularApiServiceAsString
    };
}
exports.default = main;
function constructAngularApiRoutesString(apiObject) {
    apiObject = loopThroughObjectAndEditStringProperties(apiObject);
    let stringifiedApiObject = JSON.stringify(apiObject, null, 2);
    let stringifiedApiObject_without_double_quotes = stringifiedApiObject.split('').filter(el => el !== '"').join('');
    return stringifiedApiObject_without_double_quotes;
}
function loopThroughObjectAndEditStringProperties(obj) {
    let newObj = {};
    let beforePath = "this.createApi('";
    let afterPath = "')";
    for (let prop in obj) {
        if (typeof obj[prop] === 'string')
            newObj[prop] = beforePath + obj[prop] + afterPath;
        else
            newObj[prop] = loopThroughObjectAndEditStringProperties(obj[prop]);
    }
    return newObj;
}
//# sourceMappingURL=compileAngular.js.map