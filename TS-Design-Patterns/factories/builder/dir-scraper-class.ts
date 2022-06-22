import fs from 'fs'
interface IFileReader {
  isJSONFile(file: string): boolean
  readText(file: string): string
  readJson(file: string): unknown
}

class DirectoryScraper {
  constructor(public dirPath: string, public fileReader: IFileReader) {}

  scanFiles() {
    return fs
      .readdirSync(this.dirPath)
      .reduce<Record<string, unknown>>((acc, file) => {
        if (this.fileReader.isJSONFile(file)) {
          acc[file] = this.fileReader.readJson(`${this.dirPath}/${file}`)
        } else {
          acc[file] = this.fileReader.readText(`${this.dirPath}/${file}`)
        }
        return acc
      }, {})
  }
}
