function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key])
}

const dogs = [
  { name: 'Mimi', age: 12 },
  { name: 'LG', age: 13 },
]

console.log(pluck(dogs, 'age'))
console.log(pluck(dogs, 'name'))

interface BaseEvent {
  time: number
  user: string
}
// Type & {key:value} is basically adding two types
interface EventMap {
  addToCart: BaseEvent & { quantity: number; productID: string }
  checkout: BaseEvent
}

function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void {
  console.log([name, data])
}

sendEvent('addToCart', { productID: '123', quantity: 2, user: 'DK', time: 20 })
sendEvent('checkout', { time: 20, user: 'DK' })
