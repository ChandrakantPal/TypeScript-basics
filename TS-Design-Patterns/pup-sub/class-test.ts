import { Subscribable } from './subscribable-class'

const sub = new Subscribable<string>()
sub.subscribe(console.log)
sub.publish('Hello')
sub.publish('Whatever')
sub.publish('Goodbye')
