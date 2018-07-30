import { autoGenerateApiUtitily } from '../auto-generate-apis-utility'


export default autoGenerateApiUtitily({
    angularServiceTemplate: '/Users/drewmurr/Documents/GitHub/Client-Connect-V3-Experiment/auto-generate-apis/angularTemplate.ts',
    expressRouterTemplate: '/Users/drewmurr/Documents/GitHub/Client-Connect-V3-Experiment/auto-generate-apis/expressRouterTemplate.ts',
    expressApiDirectory: '/Users/drewmurr/Documents/GitHub/Client-Connect-V3-Experiment/',
    expressRoutePath: '/Users/drewmurr/Documents/GitHub/Client-Connect-V3-Experiment/src/router.ts',
    angularApiServicePath: '/Users/drewmurr/Documents/GitHub/Client-Connect-V3-Experiment/angular.service.ts',
})

let testFunc = () => {
    return 1
}