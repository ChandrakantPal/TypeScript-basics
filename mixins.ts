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
