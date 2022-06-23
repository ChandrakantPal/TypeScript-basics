import { Subscribable } from './subscribable-class'

const sub = new Subscribable<string>()
const unsub = sub.subscribe(console.log)
sub.publish('Hello')
sub.publish('Whatever')
unsub()
sub.publish('Goodbye')

class DataClass extends Subscribable<number> {
  constructor(public value: number) {
    super()
  }

  setValue(v: number) {
    this.value = v
    this.publish(v)
  }
}
