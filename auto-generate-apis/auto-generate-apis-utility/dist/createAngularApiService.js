"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateAngularService {
    constructor(angularTemplate, pathToAngularApiService, apiObject) {
        this.angularTemplate = angularTemplate;
        this.pathToAngularApiService = pathToAngularApiService;
        this.apiObject = apiObject;
        this.angularApiRoutesString = this.constructAngularApiRoutesString(apiObject);
        this.angularApiServiceString = angularTemplate.replace("{ { } }", this.angularApiRoutesString);
        this.saveFile(this.angularApiServiceString, pathToAngularApiService);
    }
    constructAngularApiRoutesString(apiObject) {
        apiObject = this.loopThroughObjectAndEditStringProperties(apiObject);
        let stringifiedApiObject = JSON.stringify(apiObject);
        let stringifiedApiObject_without_double_quotes = stringifiedApiObject.split('').filter(el => el !== '"').join('');
        return stringifiedApiObject_without_double_quotes;
    }
    loopThroughObjectAndEditStringProperties(obj) {
        let newObj = {};
        let beforePath = "this.createApi('";
        let afterPath = "')";
        for (let prop in obj) {
            if (typeof obj[prop] === 'string')
                newObj[prop] = beforePath + obj[prop] + afterPath;
            else
                newObj[prop] = this.loopThroughObjectAndEditStringProperties(obj[prop]);
        }
        return newObj;
    }
    saveFile(contents, path) {
    }
}
exports.CreateAngularService = CreateAngularService;
//# sourceMappingURL=createAngularApiService.js.map