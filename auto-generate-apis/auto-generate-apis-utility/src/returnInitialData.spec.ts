import returnInitialData from './returnInitialData'
import { InitialData, MainConfig } from './index'
import { testConfig } from './index.spec'

describe('Return Initial Data', () => {
    let result = returnInitialData(testConfig)
    it("Should return the right Array of paths", done => {
        expect(result.arrayOfPaths).toEqual(testInitialDataResult.arrayOfPaths)
        done()
    })


    it("Should return the right object Of Endpoints", done => {
        expect(result.objectOfEndpoints).toEqual(testInitialDataResult.objectOfEndpoints)

        done()
    })

})

export let testInitialDataResult: InitialData = {
    arrayOfPaths: [
        "folder_for_testing/express_apis_for_testing/file_for_testing",
        "folder_for_testing/express_apis_for_testing/subfolder_for_testing/another_file_from_subfolder",
        "folder_for_testing/express_apis_for_testing/subfolder_for_testing/file_from_subfolder",
    ],
    objectOfEndpoints: {
        "express_apis_for_testing": {
            "file_for_testing": "folder_for_testing/express_apis_for_testing/file_for_testing",
            "subfolder_for_testing": {
                "another_file_from_subfolder": "folder_for_testing/express_apis_for_testing/subfolder_for_testing/another_file_from_subfolder",
                "file_from_subfolder": "folder_for_testing/express_apis_for_testing/subfolder_for_testing/file_from_subfolder",
            },
        },
    }
}