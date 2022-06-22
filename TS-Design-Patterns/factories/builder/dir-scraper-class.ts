interface IFileReader {
  isJSONFile(file: string): boolean
  readText(file: string): string
  readJson(file: string): unknown
}
