function myForEach<T>(items: T[], forEachFunc: (v: T) => void): void {
  items.reduce((a, v) => {
    forEachFunc(v)
    return undefined
  }, undefined)
}

myForEach(['a', 'b', 'c'], (v) => console.log(`forEach ${v}`))
