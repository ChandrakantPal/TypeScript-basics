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

// function that returns a function type

export type adderFunction = (v: number) => number

export function createAdder(num: number): adderFunction {
  return (val: number) => num + val
}

// 1 here is num parameter
const addOne = createAdder(1)

// 55 is val parameter
console.log(addOne(55))
