"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const createAngularApiService_1 = require("./createAngularApiService");
class Main {
    constructor() {
        this.fs = fs;
        this._convertArrayOfPathsToObject = (arrayOfPaths) => {
            let baseObj = {};
            arrayOfPaths.forEach(path => {
                this.addApi(baseObj, path);
            });
            return baseObj;
        };
        this._pathToString = (path) => {
            var content = this.fs.readFileSync(path, 'utf8');
            return content;
        };
        this._recursivelyFindAllPathsInADirectory = (directory) => {
            let isFolder = this.fs.statSync(directory).isDirectory();
            if (isFolder) {
                let contentsOfFolder = this.fs.readdirSync(directory);
                return contentsOfFolder.map(fileOrFilder => this._recursivelyFindAllPathsInADirectory(path.join(directory, fileOrFilder)));
            }
            else
                return directory;
        };
        this._retrieve_api_file_names = (config) => {
            const filesNested = this._recursivelyFindAllPathsInADirectory(config.expressApiDirectory);
            let files = [];
            const pushFromArray = (arr) => {
                if (arr.forEach)
                    arr.forEach(el => pushFromArray(el));
                else
                    files.push(arr);
            };
            pushFromArray(filesNested);
            files = this._remove_map_files(files);
            return files;
        };
        this._remove_map_files = (all_files) => all_files.filter(a_file => a_file.split(".map").length === 1);
        this._remove_ts_extensions = (file_paths) => file_paths.map(a_file_path => this._remove_ts_extension(a_file_path));
        this._remove_ts_extension = (a_file) => a_file.replace('.ts', '');
    }
    autoGenerateApiUtitily(config) {
        let { angularServiceTemplatePath, expressRouterTemplatePath, expressRoutePath, angularApiServicePath } = config;
        const angularServiceTemplate = this._pathToString(angularServiceTemplatePath);
        const expressRouterTemplate = this._pathToString(expressRouterTemplatePath);
        const apis_with_extensions = this._retrieve_api_file_names(config);
        const apis_without_extensions = this._remove_ts_extensions(apis_with_extensions);
        const apiObject = this._convertArrayOfPathsToObject(apis_without_extensions);
        new createAngularApiService_1.CreateAngularService(angularServiceTemplate, config.angularApiServicePath, apiObject);
        return apiObject;
    }
    addApi(parentObj, path, fullpath) {
        if (!fullpath)
            fullpath = path;
        const pathParts = path.split("/");
        if (pathParts.length > 1) {
            const folderName = pathParts[0];
            if (!parentObj[folderName])
                parentObj[folderName] = {};
            pathParts.splice(0, 1);
            this.addApi(parentObj[folderName], pathParts.join("/"), fullpath);
        }
        else {
            parentObj[path] = fullpath;
        }
    }
}
exports.Main = Main;
//# sourceMappingURL=index.js.map