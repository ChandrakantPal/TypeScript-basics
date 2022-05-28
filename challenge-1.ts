import houses from './houses.json'
interface House {
  name: string
  planets: string | string[]
}

interface HouseWithID {
  name: string
  planets: string | string[]
  id: string
}

function findHouses(houses: string): HouseWithID[]
function findHouses(
  houses: string,
  filter: (house: House) => boolean
): HouseWithID[]
function findHouses(houses: House[]): HouseWithID[]
function findHouses(
  houses: House[],
  filter: (house: House) => boolean
): HouseWithID[]
function findHouses(arg1: unknown, arg2?: unknown): HouseWithID[] {
  let houseWithID: HouseWithID = {
    id: '',
    name: '',
    planets: '',
  }
  return [houseWithID]
}

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === 'Atreides')
)

console.log(findHouses(houses, ({ name }) => name === 'Harkonnen'))
