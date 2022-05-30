// Optional Parameters
function printIngredient(quantity: string, ingredient: string, extra?: string) {
  console.log(`${quantity} ${ingredient} ${extra ? `${extra}` : ''}`)
}

printIngredient('1C', 'Flour')
printIngredient('1C', 'Sugar', 'something more')

// Optional Fields
interface User {
  id: string
  info?: {
    email?: string
  }
}

function getEmail(user: User): string {
  return user?.info?.email ?? ''
}
