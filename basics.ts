// string
let userName: string = 'Sanjay'

// boolean
let hasLoggedIn: boolean = true

userName += ' Pal'

console.log(userName)

// number
let num: number = 10

// RegEx
let Regex: RegExp = /foo/

// Arrays
const names: string[] = userName.split(' ')
const numArr: Array<number> = [1, 2, 3]

// Objects

interface Person {
  first: string
  last: string
}

const obj: Person = {
  first: 'Sanjay',
  last: 'Pal',
}

// objects as map
const ids: Record<number, string> = {
  10: 'a',
  20: 'b',
}

ids[30] = 'c'

if (ids[30] === 'D') {
}

for (let i = 0; i < 10; i++) {
  console.log(i)
}

;[1, 2, 3].forEach((v) => {
  console.log(v)
})

const out: number[] = [4, 5, 6].map((v) => v * 10)
