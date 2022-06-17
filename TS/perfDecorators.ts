export function timing() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const value = descriptor.value
    descriptor.value = async function (...args: any[]) {
      const out = await value.apply(this, args)
      return out
    }
  }
}
