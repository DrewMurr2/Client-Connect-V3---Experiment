"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const returnInitialData_1 = __importDefault(require("./returnInitialData"));
const compileAngular_1 = __importDefault(require("./compileAngular"));
const compileExpressRoutes_1 = __importDefault(require("./compileExpressRoutes"));
function main(config) {
    let { shouldCompileAngular, shouldCompileExpressRoutes } = config;
    let shouldRun = shouldCompileAngular || shouldCompileExpressRoutes;
    let initialData;
    if (shouldRun) {
        initialData = returnInitialData_1.default(config);
        if (shouldCompileAngular)
            compileAngular_1.default(initialData, config);
        if (shouldCompileExpressRoutes)
            compileExpressRoutes_1.default(initialData, config);
    }
    return {
        shouldRun,
        shouldCompileAngular,
        shouldCompileExpressRoutes,
        initialData
    };
}
exports.default = main;
//# sourceMappingURL=index.js.map