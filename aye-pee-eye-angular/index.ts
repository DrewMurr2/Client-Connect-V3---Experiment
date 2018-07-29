import { Response, Request, Router } from "express";
import * as fs from 'fs';
import * as path from 'path';

const router = Router()



export default function (config: Config) {
    const apis = retrieve_api_file_names(config)

    mount_apis(apis, config.root + config.api_folder)
    create_angular_api_service(apis, config)
    return router
}

const retrieve_api_file_names = (config: Config) => {
    // recursive function to map files from directory. Truthfully I don't get it. straight copy pasta - it's 230am give ma break
    const walkSync = (d: string): any => fs.statSync(d).isDirectory() ? fs.readdirSync(d).map(f => walkSync(path.join(d, f))) : d
    const filesNested = walkSync(config.root + config.api_folder)
    let files: Array<any> = []
    const pushFromArray = (arr: Array<any>) => {
        if (arr.forEach) arr.forEach(el => pushFromArray(el))
        else files.push(arr)
    }
    pushFromArray(filesNested)
    files = remove_map_files(files)
    return files
}

const remove_map_files = (all_files: Array<string>): Array<string> => all_files.filter(a_file => a_file.split(".map").length === 1)
const remove_root = (a_file: string, root: string): string => a_file.split(root).join("")
const remove_all_roots = (all_files: Array<string>, root: string): Array<string> => all_files.map(a_file => remove_root(a_file, root))
const remove_js_extension = (a_file: string): string => a_file.split(".js").join("")
const remove_all_js_extensions = (all_files: Array<string>): Array<string> => all_files.map(a_file => remove_js_extension(a_file))
const remove_root_and_extension = (a_file: string, root: string): string => remove_js_extension(remove_root(a_file, root))


const mount_apis = (apis: Array<string>, root: string): void => {
    apis.forEach(an_api => {
        router.post(remove_root_and_extension(an_api, root), require(an_api).api)
    })
}

const create_angular_api_service = (files: Array<string>, config: Config) => {

    let file_string: any =  JSON.parse(middle_half(files));
    file_string = file_string.map(( file: any ) =>  {
        return file.split("api\\")[1].replace(/\\/g, "/").replace(".js", "");
    });
    const fileContent = `export let apiFiles = [\n"${file_string.join('",\n"')}"\n];`;

    fs.writeFile(config.angularPath, fileContent, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });

}

interface Config {
    root: string,
    api_folder: string,
    angularPath: string,
    angularName: string
}


const middle_half = (files: Array<string>): string => JSON.stringify(files)



