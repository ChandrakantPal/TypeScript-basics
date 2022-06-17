import { performance } from 'perf_hooks'
import 'reflect-metadata'

const importantMetadataKey = Symbol('important')

export function important(
  target: Object,
  propertyKey: string | symbol,
  parameterIndex: number
) {
  let existingRequiredParameters: number[] =
    Reflect.getOwnMetadata(importantMetadataKey, target, propertyKey) || []
  existingRequiredParameters.push(parameterIndex)
  Reflect.defineMetadata(
    importantMetadataKey,
    existingRequiredParameters,
    target,
    propertyKey
  )
}

interface ThisWithTimings {
  __timings: unknown[]
}
// class decorator
export function logTimings<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    __timings = []
    printTimings = () => {
      console.log(this.__timings)
    }
  }
}

// function decorators
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

      const importantParams: unknown[] = []
      let importantParameters: number[] = Reflect.getOwnMetadata(
        importantMetadataKey,
        target,
        propertyKey
      )
      if (importantParameters) {
        for (let parameterIndex of importantParameters) {
          importantParams.push(args[parameterIndex])
        }
      }
      if ((this as ThisWithTimings).__timings) {
        ;(this as ThisWithTimings).__timings.push({
          method: propertyKey,
          time: end - start,
          importantParams,
        })
      } else {
        console.log(end - start)
      }
      return out
    }
  }
}
