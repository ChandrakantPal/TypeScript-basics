function addNumbers(a: number, b: number): number {
  return a + b
}

export default addNumbers

// defaulting a parameter
export const addStrings = (str1: string, str2: string = ''): string =>
  `${str1} ${str2}`

// union type
export const format = (title: string, param: string | number): string =>
  `${title} ${param}`

// viod return type
export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param))
}

// Promise param type
export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`)

// rest param type
export function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(' ')}`
}

// testing type enforcement at compile time
export function getName(user: { first: string; last: string }): string {
  // ?. to avoid error during runtime
  //   ?? to avoid displaying undefined undefined
  return `${user?.first ?? 'first'} ${user?.last ?? 'last'}`
}
