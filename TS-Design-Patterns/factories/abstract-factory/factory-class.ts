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

class DevelopmentLogger implements ILogger {
  info(message: string): void {
    console.warn(message)
  }
  warn(message: string): void {
    console.warn(message)
  }
  debug(message: string): void {
    console.warn(message)
  }
  error(message: string): void {
    console.error(message)
  }
}

class LoggerFactory {
  public static createLogger(env: string): ILogger {
    if (env === 'production') {
      return new ProductionLogger()
    } else {
      return new DevelopmentLogger()
    }
  }
}
