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

class FileReader implements IFileReader {
  isJSONFile(file: string): boolean {
    return file.endsWith('.json')
  }
  readText(file: string): string {
    return fs.readFileSync(file, 'utf-8').toString()
  }
  readJson(file: string): unknown {
    return JSON.parse(fs.readFileSync(file, 'utf-8').toString())
  }
}
