"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auto_generate_apis_utility_1 = __importDefault(require("../auto-generate-apis-utility"));
let mainConfig = {
    angularServiceTemplatePath: '/Users/drewmurr/Documents/GitHub/Client-Connect-V3-Experiment/auto-generate-apis/angularTemplate.ts',
    expressRouterTemplatePath: '/Users/drewmurr/Documents/GitHub/Client-Connect-V3-Experiment/auto-generate-apis/expressRouterTemplate.ts',
    expressApiDirectory: '/Users/drewmurr/Documents/GitHub/Client-Connect-V3-Experiment/',
    expressRoutePath: '/Users/drewmurr/Documents/GitHub/Client-Connect-V3-Experiment/src/router.ts',
    angularApiServicePath: '/Users/drewmurr/Documents/GitHub/Client-Connect-V3-Experiment/angular.service.ts',
    shouldCompileAngular: true,
    shouldCompileExpressRoutes: true,
    placeholder: '{ { } }'
};
let r = auto_generate_apis_utility_1.default(mainConfig);
//# sourceMappingURL=index.js.map