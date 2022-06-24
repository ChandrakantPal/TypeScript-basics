import fetch from 'node-fetch'

async function* iterateResults<DataType>(url: string) {
  let nextUrl: string | undefined = url
  do {
    const response = await fetch(nextUrl)
    const json: {
      next?: string
      results: DataType[]
    } = await response.json()
    yield* json.results
    nextUrl = json.next
  } while (nextUrl)
}
