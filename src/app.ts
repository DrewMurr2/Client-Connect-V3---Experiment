import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import ayePeeEye from "../aye-pee-eye-angular"
// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: ".env" });

// Controllers ( route handlers )
import * as numberController from "./controllers/number";
// create express server
const app = express();

// Express configuration
app.set("port", process.env.port || 3100);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", ayePeeEye({
    root: __dirname,
    angularPath: "C:\\Users\\ayyaz\\Downloads\\typescript_basic_demo_start_aye-pee-eye-angular\\typescript_basic_demo_start_aye-pee-eye-angular/api-endpoints.ts",
    angularName: "api",
    api_folder: "/api"
}))

// Primary app routes 
app.get("/number/getNumbers", numberController.getNumbers);
app.use("/routertest", numberController.routertest)
app.get("/", (requestAnimationFrame, resp) => resp.send("<h1> Hello Node + Typescript</h1>"));

export default app;