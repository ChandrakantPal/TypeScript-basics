class Doggy {
  constructor(public readonly name: string, public readonly age: number) {}
}

const lgg = new Doggy('LG', 13)
// lgg.name = "Foo" Cannot assign to 'name' because it is a read-only property.
console.log(lgg.name)
