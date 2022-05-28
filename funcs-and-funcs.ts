// callback function parameter types
export function printToFile(text: string, callback: () => void): void {
  console.log(text)
  callback()
}
