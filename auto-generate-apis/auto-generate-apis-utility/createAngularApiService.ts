
export class CreateAngularService {

    constructor(private angularTemplate: string, private pathToAngularApiService: string, private apiObject: any) {

        this.angularApiRoutesString = this.constructAngularApiRoutesString(apiObject)
        this.angularApiServiceString = angularTemplate.replace("{ { } }", this.angularApiRoutesString)
        this.saveFile(this.angularApiServiceString, pathToAngularApiService)


    }

    angularApiRoutesString: string
    angularApiServiceString: string

    constructAngularApiRoutesString(apiObject: any): string {
        apiObject = this.loopThroughObjectAndEditStringProperties(apiObject)
        let stringifiedApiObject = JSON.stringify(apiObject)
        let stringifiedApiObject_without_double_quotes = stringifiedApiObject.split('').filter(el => el !== '"').join('')

        return stringifiedApiObject_without_double_quotes
    }

    loopThroughObjectAndEditStringProperties(obj: any) {
        let newObj: any = {}
        let beforePath = "this.createApi('"
        let afterPath = "')"
        for (let prop in obj) {
            if (typeof obj[prop] === 'string')
                newObj[prop] = beforePath + obj[prop] + afterPath
            else
                newObj[prop] = this.loopThroughObjectAndEditStringProperties(obj[prop])
        }
        return newObj
    }

    saveFile(contents: string, path: string) {

    }

}