import * as fs from 'fs'
export default function pathToString(path: string): string {
    var content = fs.readFileSync(path, 'utf8');
    return content
}