interface Cat {
  // readonly name: string
  name: string
  breed: string
}

type ReadonlyCat = Readonly<Cat>

function makeCat(name: string, breed: string): ReadonlyCat {
  return {
    name,
    breed,
  }
}

const usul = makeCat('Usul', 'Tabby')
// usul.name = "CAT" throws error cause fields are readonly
