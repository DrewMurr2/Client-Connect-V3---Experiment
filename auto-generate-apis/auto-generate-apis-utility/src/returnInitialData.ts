import { InitialData, MainConfig } from './index'
import * as path from 'path'
import * as fs from 'fs'

export default main

function main(config: MainConfig): InitialData {
    let arrayOfPaths: Array<string> = createArrayOfPaths(config)
    let apiBaseFolder: string = returnApiBaseFoler(config)
    let objectOfEndpoints: any = convertArrayOfPathsToObject(arrayOfPaths, apiBaseFolder)
    return {
        arrayOfPaths,
        objectOfEndpoints
    }
}

let returnApiBaseFoler = (config: MainConfig): string => {
    let foldersInApiPath = config.expressApiDirectory.split('/')
    return foldersInApiPath[foldersInApiPath.length - 1]
}

let createArrayOfPaths = (config: MainConfig): Array<string> => {
    let arrayOfPaths
    arrayOfPaths = retrieve_api_file_names(config)
    arrayOfPaths = remove_map_files(arrayOfPaths)
    arrayOfPaths = remove_ts_extensions(arrayOfPaths)
    return arrayOfPaths
}


let retrieve_api_file_names = (config: MainConfig) => {
    const filesNested = recursivelyFindAllPathsInADirectory(config.expressApiDirectory)
    let files: Array<any> = []
    const pushFromArray = (arr: Array<any>) => {
        if (arr.forEach) arr.forEach(el => pushFromArray(el))
        else files.push(arr)
    }
    pushFromArray(filesNested)
    return files
}

let remove_map_files = (all_files: Array<string>): Array<string> => all_files.filter(a_file => a_file.split(".map").length === 1)
let remove_ts_extensions = (file_paths: Array<string>): Array<string> => file_paths.map(a_file_path => remove_ts_extension(a_file_path))
let remove_ts_extension = (a_file: string): string => a_file.replace('.ts', '')



let recursivelyFindAllPathsInADirectory = (directory: string): any => {
    let isFolder = fs.statSync(directory).isDirectory()
    if (isFolder) {
        let contentsOfFolder: Array<string> = fs.readdirSync(directory)
        return contentsOfFolder.map(fileOrFolder => {
            let subDirectoryFileOrFolder: string = path.join(directory, fileOrFolder)
            return recursivelyFindAllPathsInADirectory(subDirectoryFileOrFolder)
        })
    }
    else
        return directory
}




let convertArrayOfPathsToObject = (arrayOfPaths: Array<string>, apiBaseFolder: string): any => {
    let baseObj = {}
    arrayOfPaths.forEach(fullPath => {
        let splitByBase = fullPath.split(apiBaseFolder)
        splitByBase.shift()
        let path = apiBaseFolder + splitByBase.join(apiBaseFolder)
        addApi(baseObj, path, fullPath)
    })
    return baseObj
}

let addApi = (parentObj: any, path: string, fullpath?: string): any => {
    if (!fullpath) fullpath = path
    const pathParts = path.split("/");
    if (pathParts.length > 1) {
        const folderName = pathParts[0];
        if (!parentObj[folderName]) parentObj[folderName] = {};
        pathParts.splice(0, 1);
        addApi(parentObj[folderName], pathParts.join("/"), fullpath);
    } else {
        parentObj[path] = fullpath;
    }
}
