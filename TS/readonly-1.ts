interface Cat {
  // readonly name: string
  name: string
  breed: string
}

function makeCat(name: string, breed: string): Readonly<Cat> {
  return {
    name,
    breed,
  }
}

const usul = makeCat('Usul', 'Tabby')
// usul.name = "CAT" throws error cause fields are readonly

function makeCoordinate(
  x: number,
  y: number,
  z: number
): readonly [number, number, number] {
  return [x, y, z]
}

const c1 = makeCoordinate(10, 20, 30)
// c1[0] = 50 readonly error will be thrown

// Emutable array
const reallyConst = [1, 2, 3] as const
// reallyConst[0] = 50 Cannot assign to '0' because it is a read-only property.
