// Optional Parameters
function printIngredient(quantity: string, ingredient: string, extra?: string) {
  console.log(`${quantity} ${ingredient} ${extra ? `${extra}` : ''}`)
}

printIngredient('1C', 'Flour')
