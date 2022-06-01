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
