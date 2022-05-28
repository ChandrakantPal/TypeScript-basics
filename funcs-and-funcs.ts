// callback function parameter types
export function printToFile(text: string, callback: () => void): void {
  console.log(text)
  callback()
}

// callback function with parameters and return type
export function arrayMutate(
  numbers: number[],
  mutate: (v: number) => number
): number[] {
  return numbers.map(mutate)
}
