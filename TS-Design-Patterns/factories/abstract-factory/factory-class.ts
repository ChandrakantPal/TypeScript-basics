interface ILogger {
  info(message: string): void
  warn(message: string): void
  debug(message: string): void
  error(message: string): void
}

class ProductionLogger implements ILogger {
  info(message: string): void {}
  warn(message: string): void {
    console.warn(message)
  }
  debug(message: string): void {}
  error(message: string): void {
    console.error(message)
  }
}
