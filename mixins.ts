// function that creates function
function myLogFunction() {
  return (str: string) => {
    console.log(str)
  }
}

const logger = myLogFunction()
logger('your string')

// function that creates class
function createLoggerClass() {
  return class MyLoggerClass {
    private completeLog: string = ''
    log(str: string) {
      console.log(str)
      this.completeLog += str + '\n'
    }
    dumpLog() {
      return this.completeLog
    }
  }
}

// intanciate
const MyLogger = createLoggerClass()
const logger2 = new MyLogger()
logger2.log('Foo')
console.log(logger2.dumpLog())

function CreateSimpleMemoryDatabase<T>() {
  return class SimpleMemoryDatabase {
    private db: Record<string, T> = {}

    set(id: string, value: T) {
      this.db[id] = value
    }
    get(id: string): T {
      return this.db[id]
    }
    getObject(): object {
      return this.db
    }
  }
}

const StringDatabase = CreateSimpleMemoryDatabase<string>()

const sdb1 = new StringDatabase()
sdb1.set('a', 'hello')

// mixin

type Constructor<T> = new (...args: any[]) => T

function Dumpable<
  T extends Constructor<{
    getObject(): object
  }>
>(Base: T) {
  return class Dumpable extends Base {
    dumnp() {
      console.log(this.getObject())
    }
  }
}

const DumpableStringDatabase = Dumpable(StringDatabase)
const sdb2 = new DumpableStringDatabase()
sdb2.set('a', 'hello')
sdb2.dumnp()
