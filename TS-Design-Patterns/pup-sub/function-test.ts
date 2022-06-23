import { createSubscribable } from './subscribable-function'

const sub = createSubscribable<string>()
const unsub = sub.subscribe(console.log)
sub.publish('Hello')
sub.publish('Whatever')
unsub()
sub.publish('Goodbye')
