function myLogFunction() {
  return (str: string) => {
    console.log(str)
  }
}

const logger = myLogFunction()
logger('your string')
