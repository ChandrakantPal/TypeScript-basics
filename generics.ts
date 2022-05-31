function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let val: T = initial
  return [
    () => val,
    (v: T) => {
      val = v
    },
  ]
}

const [st1getter, st1setter] = simpleState(1)
console.log(st1getter())
st1setter(2)
console.log(st1getter())

// Overriding inferred generic type
const [st2getter, st2setter] = simpleState<string | null>(null)
console.log(st2getter())
st2setter('str')
console.log(st2getter())
st2setter(null)
console.log(st2getter())
