"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule)
        return mod;
    var result = {};
    if (mod != null)
        for (var k in mod)
            if (Object.hasOwnProperty.call(mod, k))
                result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
exports.default = main;
function main(config) {
    let arrayOfPaths = createArrayOfPaths(config);
    let apiBaseFolder = returnApiBaseFoler(config);
    let objectOfEndpoints = convertArrayOfPathsToObject(arrayOfPaths, apiBaseFolder);
    return {
        arrayOfPaths,
        objectOfEndpoints
    };
}
let returnApiBaseFoler = (config) => {
    let foldersInApiPath = config.expressApiDirectory.split('/');
    return foldersInApiPath[foldersInApiPath.length - 1];
};
let createArrayOfPaths = (config) => {
    let arrayOfPaths;
    arrayOfPaths = retrieve_api_file_names(config);
    arrayOfPaths = remove_map_files(arrayOfPaths);
    arrayOfPaths = remove_ts_extensions(arrayOfPaths);
    return arrayOfPaths;
};
let retrieve_api_file_names = (config) => {
    const filesNested = recursivelyFindAllPathsInADirectory(config.expressApiDirectory);
    let files = [];
    const pushFromArray = (arr) => {
        if (arr.forEach)
            arr.forEach(el => pushFromArray(el));
        else
            files.push(arr);
    };
    pushFromArray(filesNested);
    return files;
};
let remove_map_files = (all_files) => all_files.filter(a_file => a_file.split(".map").length === 1);
let remove_ts_extensions = (file_paths) => file_paths.map(a_file_path => remove_ts_extension(a_file_path));
let remove_ts_extension = (a_file) => a_file.replace('.ts', '');
let recursivelyFindAllPathsInADirectory = (directory) => {
    let isFolder = fs.statSync(directory).isDirectory();
    if (isFolder) {
        let contentsOfFolder = fs.readdirSync(directory);
        return contentsOfFolder.map(fileOrFolder => {
            let subDirectoryFileOrFolder = path.join(directory, fileOrFolder);
            return recursivelyFindAllPathsInADirectory(subDirectoryFileOrFolder);
        });
    }
    else
        return directory;
};
let convertArrayOfPathsToObject = (arrayOfPaths, apiBaseFolder) => {
    let baseObj = {};
    arrayOfPaths.forEach(fullPath => {
        let splitByBase = fullPath.split(apiBaseFolder);
        splitByBase.shift();
        let path = apiBaseFolder + splitByBase.join(apiBaseFolder);
        addApi(baseObj, path, fullPath);
    });
    return baseObj;
};
let addApi = (parentObj, path, fullpath) => {
    if (!fullpath)
        fullpath = path;
    const pathParts = path.split("/");
    if (pathParts.length > 1) {
        const folderName = pathParts[0];
        if (!parentObj[folderName])
            parentObj[folderName] = {};
        pathParts.splice(0, 1);
        addApi(parentObj[folderName], pathParts.join("/"), fullpath);
    }
    else {
        parentObj[path] = fullpath;
    }
};
//# sourceMappingURL=returnInitialData.js.map