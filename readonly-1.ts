interface Cat {
  name: string
  breed: string
}

function makeCat(name: string, breed: string): Cat {
  return {
    name,
    breed,
  }
}

const usul = makeCat('Usul', 'Tabby')
