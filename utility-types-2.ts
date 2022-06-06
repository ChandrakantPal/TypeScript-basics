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

function permuteRows<T extends (...args: any[]) => any>(
  iteratorFuunc: T,
  data: Parameters<T>[0][]
): ReturnType<T>[] {
  return data.map(iteratorFuunc)
}

console.log(permuteRows(addFullName, [{ first: 'sanjay', last: 'pal' }]))

class PersonWithFullName {
  constructor(public name: Name) {}

  get fullName() {
    return `${this.name.first} ${this.name.last}`
  }
}
