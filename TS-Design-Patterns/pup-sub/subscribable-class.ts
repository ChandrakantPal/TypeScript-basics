export class Subscribable {
  private subscribers: Set<() => void> = new Set()
  constructor() {}
}
