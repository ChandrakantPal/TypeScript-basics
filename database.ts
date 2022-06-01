interface Database {
  get(id: string): string
  set(id: string, value: string): void
}

class InMemoryDatabase implements Database {
  db: Record<string, string> = {}
  get(id: string): string {
    return this.db[id]
  }
  set(id: string, value: string): void {
    this.db[id] = value
  }
}

const myDB = new InMemoryDatabase()
myDB.set('foo', 'bar')
console.log(myDB.get('foo'))
