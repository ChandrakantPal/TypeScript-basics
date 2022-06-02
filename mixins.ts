function myLogFunction() {
  return (str: string) => {
    console.log(str)
  }
}

const logger = myLogFunction()
logger('your string')

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
