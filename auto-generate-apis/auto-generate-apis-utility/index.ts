import * as fs from 'fs'
import * as path from 'path'

export interface Config {
    angularServiceTemplate: string,
    expressRouterTemplate: string,
    expressApiDirectory: string,
    expressRoutePath: string,
    angularApiServicePath: string,
}

export class Someclass {

    fs = fs

    autoGenerateApiUtitily(config: Config): Array<string> {
        let { angularServiceTemplate,
            expressRouterTemplate,
            expressRoutePath,
            angularApiServicePath } = config
        angularServiceTemplate = this._pathToString(angularServiceTemplate)
        expressRouterTemplate = this._pathToString(expressRouterTemplate)
        const apis = this._retrieve_api_file_names(config)
        const apiObject = this._convertArrayOfPathsToObject(apis)

        

        return apiObject
    }


_convertArrayOfPathsToObject = (arrayOfPaths: Array<string>):any => {
    let baseObj = {}
    console.log('\n\narray of paths:\n\n', arrayOfPaths)
    arrayOfPaths.forEach(path => {
        this.addApi(baseObj, path)
    })
return baseObj
}

 private addApi(parentObj, path, fullpath?) {
 if(!fullpath)fullpath = path
    const pathParts = path.split("/");
      if (pathParts.length > 1) {
          const folderName = pathParts[0];
          if(!parentObj[folderName]) parentObj[folderName] = {};
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




    _retrieve_api_file_names = (config: Config) => {
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



}