import { performance } from 'perf_hooks'

export function logTimings<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    __timings = []
  }
}

export function timing() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const value = descriptor.value
    descriptor.value = async function (...args: any[]) {
      const start = performance.now()
      const out = await value.apply(this, args)
      const end = performance.now()
      console.log(end - start)
      return out
    }
  }
}
