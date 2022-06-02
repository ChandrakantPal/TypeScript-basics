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

// Template Literals `on${Capitalize<string & Property>}Change`
type Listeners<Type> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (
    newVale: Type[Property]
  ) => void
} & {
  [Property in keyof Type as `on${Capitalize<
    string & Property
  >}Delete`]?: () => void
}

function listenToObject<T>(obj: T, listeners: Listeners<T>): void {
  throw 'neewds to be implemented'
}

const lg: DogInfo = {
  name: 'LG',
  age: 13,
}

type DogInfoListeners = Listeners<DogInfo>

listenToObject(lg, {
  onNameChange: (v: string) => {},
  onAgeChange: (v: number) => {},
})
