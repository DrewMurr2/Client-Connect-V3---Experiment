"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const router = express_1.Router();
function default_1(config) {
    const apis = retrieve_api_file_names(config);
    mount_apis(apis, config.root + config.api_folder);
    create_angular_api_service(apis, config);
    return router;
}
exports.default = default_1;
const retrieve_api_file_names = (config) => {
    // recursive function to map files from directory. Truthfully I don't get it. straight copy pasta - it's 230am give ma break
    const walkSync = (d) => fs.statSync(d).isDirectory() ? fs.readdirSync(d).map(f => walkSync(path.join(d, f))) : d;
    const filesNested = walkSync(config.root + config.api_folder);
    let files = [];
    const pushFromArray = (arr) => {
        if (arr.forEach)
            arr.forEach(el => pushFromArray(el));
        else
            files.push(arr);
    };
    pushFromArray(filesNested);
    files = remove_map_files(files);
    return files;
};
const remove_map_files = (all_files) => all_files.filter(a_file => a_file.split(".map").length === 1);
const remove_root = (a_file, root) => a_file.split(root).join("");
const remove_all_roots = (all_files, root) => all_files.map(a_file => remove_root(a_file, root));
const remove_js_extension = (a_file) => a_file.split(".js").join("");
const remove_all_js_extensions = (all_files) => all_files.map(a_file => remove_js_extension(a_file));
const remove_root_and_extension = (a_file, root) => remove_js_extension(remove_root(a_file, root));
const mount_apis = (apis, root) => {
    apis.forEach(an_api => {
        router.post(remove_root_and_extension(an_api, root), require(an_api).api);
    });
};
const create_angular_api_service = (files, config) => {
    let file_string = JSON.parse(middle_half(files));
    file_string = file_string.map((file) => {
        return file.split("api\\")[1].replace(/\\/g, "/").replace(".js", "");
    });
    const fileContent = `export let apiFiles = [\n"${file_string.join('",\n"')}"\n];`;
    fs.writeFile(config.angularPath, fileContent, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
};
const middle_half = (files) => JSON.stringify(files);
//# sourceMappingURL=index.js.map