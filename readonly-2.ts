// readonly
class Doggy {
  constructor(public readonly name: string, public readonly age: number) {}
}

const lgg = new Doggy('LG', 13)
// lgg.name = "Foo" Cannot assign to 'name' because it is a read-only property.
console.log(lgg.name)

// statics
class DogList {
  private doggies: Doggy[] = []

  static instance: DogList = new DogList()

  private constructor() {}

  static addDog(dog: Doggy) {
    DogList.instance.doggies.push(dog)
  }

  getDogs() {
    return this.doggies
  }
}

DogList.addDog(lgg)
console.log(DogList.instance.getDogs())

// const dl = new DogList()  Constructor of class 'DogList' is private and only accessible within the class declaration.
