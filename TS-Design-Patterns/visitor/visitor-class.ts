import fetch from 'node-fetch'

class VisitAllPages<DataType> {
  constructor(private baseUrl: string) {}

  async visit(visitor: (results: DataType[]) => void) {
    let nextUrl: string | undefined = this.baseUrl
    do {
      const response = await fetch(nextUrl)
      const json: {
        next?: string
        results: DataType[]
      } = await response.json()
      visitor(json.results)
      nextUrl = json.next
    } while (nextUrl)
  }
}
