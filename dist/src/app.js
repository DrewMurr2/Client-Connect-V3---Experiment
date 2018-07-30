"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const aye_pee_eye_angular_1 = __importDefault(require("../aye-pee-eye-angular"));
// Load environment variables from .env file, where API keys and passwords are configured
dotenv_1.default.config({ path: ".env" });
// Controllers ( route handlers )
const numberController = __importStar(require("./controllers/number"));
// create express server
const app = express_1.default();
// Express configuration
app.set("port", process.env.port || 3100);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use("/api", aye_pee_eye_angular_1.default({
    root: __dirname,
    angularPath: "C:\\Users\\ayyaz\\Downloads\\typescript_basic_demo_start_aye-pee-eye-angular\\typescript_basic_demo_start_aye-pee-eye-angular/api-endpoints.ts",
    angularName: "api",
    api_folder: "/api"
}));
// Primary app routes 
app.get("/number/getNumbers", numberController.getNumbers);
app.use("/routertest", numberController.routertest);
app.get("/", (requestAnimationFrame, resp) => resp.send("<h1> Hello Node + Typescript</h1>"));
exports.default = app;
//# sourceMappingURL=app.js.map