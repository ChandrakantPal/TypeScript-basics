interface Database<T> {
  get(id: string): T
  set(id: string, value: T): void
}

interface Persistable {
  saveToString(): string
  restoreFromString(storedState: string): void
}

class InMemoryDatabase<T> implements Database<T> {
  protected db: Record<string, T> = {}
  get(id: string): T {
    return this.db[id]
  }
  set(id: string, value: T): void {
    this.db[id] = value
  }
}

class PersistentMemoryDB<T> extends InMemoryDatabase<T> implements Persistable {
  saveToString(): string {
    return JSON.stringify(this.db)
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState)
  }
}

const myDB = new PersistentMemoryDB<number>()
myDB.set('foo', 1)
// myDB.db['foo'] = 'baz' cannot do that since db is private / protected
console.log(myDB.get('foo'))
const saved = myDB.saveToString()
myDB.set('foo', 2)
console.log(myDB.get('foo'))

const myDB2 = new PersistentMemoryDB()
myDB2.restoreFromString(saved)
console.log(myDB2.get('foo'))
