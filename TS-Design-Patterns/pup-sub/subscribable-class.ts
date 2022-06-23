export class Subscribable {
  private subscribers: Set<() => void> = new Set()
  constructor() {}

  subscribe(cb: () => void) {
    this.subscribers.add(cb)
  }
}
