type MyFlexibleDogInfo = {
  name: string
} & Record<string, string>

const dog: MyFlexibleDogInfo = {
  name: 'LG',
  breed: 'Mutt',
}
