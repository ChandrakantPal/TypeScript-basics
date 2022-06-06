type Name = {
  first: string
  last: string
}

function addFullName(name: Name): Name & { fullName: string } {
  return {
    ...name,
    fullName: `${name.first} ${name.last}`,
  }
}

function permuteRows<T>(
  iteratorFuunc: T,
  data: Parameters<T>[0][]
): ReturnType<T>[] {}
