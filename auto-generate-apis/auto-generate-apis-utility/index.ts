import * as fs from 'fs'
import * as path from 'path'
import { CreateAngularService } from './createAngularApiService'

export interface MainConfig {
    angularServiceTemplatePath: string,
    expressRouterTemplatePath: string,
    expressApiDirectory: string,
    expressRoutePath: string,
    angularApiServicePath: string,
}

export class Main {

    fs = fs

    autoGenerateApiUtitily(config: MainConfig): Array<string> {
        let { angularServiceTemplatePath,
            expressRouterTemplatePath,
            expressRoutePath,
            angularApiServicePath } = config
        const angularServiceTemplate = this._pathToString(angularServiceTemplatePath)
        const expressRouterTemplate = this._pathToString(expressRouterTemplatePath)
        const apis_with_extensions = this._retrieve_api_file_names(config)
        const apis_without_extensions = this._remove_ts_extensions(apis_with_extensions)
        const apiObject = this._convertArrayOfPathsToObject(apis_without_extensions)
        new CreateAngularService(angularServiceTemplate, config.angularApiServicePath, apiObject)

        return apiObject
    }


    _convertArrayOfPathsToObject = (arrayOfPaths: Array<string>): any => {
        let baseObj = {}
        arrayOfPaths.forEach(path => {
            this.addApi(baseObj, path)
        })
        return baseObj
    }

    private addApi(parentObj: any, path: string, fullpath?: string) {
        if (!fullpath) fullpath = path
        const pathParts = path.split("/");
        if (pathParts.length > 1) {
            const folderName = pathParts[0];
            if (!parentObj[folderName]) parentObj[folderName] = {};
            pathParts.splice(0, 1);
            this.addApi(parentObj[folderName], pathParts.join("/"), fullpath);
        } else {
            parentObj[path] = fullpath;
        }
    }

    _pathToString = (path: string): string => {
        var content = this.fs.readFileSync(path, 'utf8');
        return content
    }



    _recursivelyFindAllPathsInADirectory = (directory: string): any => {
        let isFolder = this.fs.statSync(directory).isDirectory()
        if (isFolder) {
            let contentsOfFolder = this.fs.readdirSync(directory)
            return contentsOfFolder.map(fileOrFilder => this._recursivelyFindAllPathsInADirectory(path.join(directory, fileOrFilder)))
        }
        else
            return directory
    }




    _retrieve_api_file_names = (config: MainConfig) => {
        const filesNested = this._recursivelyFindAllPathsInADirectory(config.expressApiDirectory)
        let files: Array<any> = []
        const pushFromArray = (arr: Array<any>) => {
            if (arr.forEach) arr.forEach(el => pushFromArray(el))
            else files.push(arr)
        }
        pushFromArray(filesNested)
        files = this._remove_map_files(files)
        return files
    }

    _remove_map_files = (all_files: Array<string>): Array<string> => all_files.filter(a_file => a_file.split(".map").length === 1)

    _remove_ts_extensions = (file_paths: Array<string>) => file_paths.map(a_file_path => this._remove_ts_extension(a_file_path))
    _remove_ts_extension = (a_file: string) => a_file.replace('.ts', '')

}