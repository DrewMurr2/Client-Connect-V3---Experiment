import errorhandler from "errorhandler";
import app from "./app";

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorhandler());

/**
 * Start Express Server
 */
const server = app.listen(app.get("port"), () => {
    console.log("App is running");
});

export default server;


