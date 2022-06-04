import fetch from 'node-fetch'
interface PokemonResults {
  count: number
  next?: string
  previous?: string
  results: {
    name: string
    url: string
  }[]
}

// conditionals
type FetchPokemonResult<T> = T extends undefined
  ? Promise<PokemonResults[]>
  : void

function fetchPokemon<T extends undefined | ((data: PokemonResults[]) => void)>(
  url: string,
  cb?: T
) {}
