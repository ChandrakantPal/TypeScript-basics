type MyFlexibleDogInfo = {
  name: string
  [key: string]: string | number
}

const dog: MyFlexibleDogInfo = {
  name: 'LG',
  breed: 'Mutt',
  age: 22,
}

// Mapped type
interface DogInfo {
  name: string
  age: number
}

type OptionsFlags<Type> = {
  [Property in keyof Type]: null
}

type DogInfoOptions = OptionsFlags<DogInfo>
