import * as fs from 'fs'

export default function writeToFile(path: string, contents: string): void {
    fs.writeFileSync(path, contents)
}