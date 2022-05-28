// callback function parameter types
export function printToFile(text: string, callback: () => void): void {
  console.log(text)
  callback()
}

// callback function with parameters and return type
export type MutationFunction = (v: number) => number

export function arrayMutate(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate)
}

console.log(arrayMutate([1, 2, 3], (v) => v * 10))
