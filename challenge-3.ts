type FilterFunction<T> = (data: T[keyof T]) => boolean
type Filters<T> = Record<keyof T, FilterFunction<T>[]>
type MapFunction<T> = (data: T[keyof T]) => T[keyof T]
type Maps<T> = Record<keyof T, MapFunction<T>[]>
class EventProcessor<T extends {}> {
  private filters: Filters<T> = <Filters<T>>{}
  handleEvent<K extends keyof T>(eventName: K, data: T[K]): void {
    let allowEvent = true
    for (const filter of this.filters[eventName] ?? []) {
      if (!filter(data)) {
        allowEvent = false
        break
      }
    }
    if (allowEvent) {
    }
  }

  addFilter<K extends keyof T>(eventName: K, filter: FilterFunction<T>): void {
    this.filters[eventName] ||= []
    this.filters[eventName].push(filter)
  }

  addMap<K extends keyof T>(eventName: K, map: (data: T[K]) => T[K]): void {}

  getProcessedEvents() {}
}

interface EventMap {
  login: { user?: string; name?: string; hasSession?: boolean }
  logout: { user?: string }
}

class UserEventProcessor extends EventProcessor<EventMap> {}

const uep = new UserEventProcessor()

uep.addFilter('login', ({ user }) => Boolean(user))

uep.addMap('login', (data) => ({
  ...data,
  hasSession: Boolean(data.user && data.name),
}))

uep.handleEvent('login', {
  user: null,
  name: 'jack',
})
uep.handleEvent('login', {
  user: 'tom',
  name: 'tomas',
})
uep.handleEvent('logout', {
  user: 'tom',
})

console.log(uep.getProcessedEvents())

/*
  Result:
  [
    {
      eventName: 'login',
      data: { user: 'tom', name: 'tomas', hasSession: true }
    },
    { eventName: 'logout', data: { user: 'tom' } }
  ]
  */
