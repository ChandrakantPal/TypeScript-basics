import * as React from 'react'

const APIComponent: React.FunctionComponent = () => {
  const [data, setData] = React.useState<{
    name: string
  }>()

  React.useEffect(() => {
    let isMounted = true
    fetch('/api')
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setData(data)
        }
      })
    return () => {
      isMounted = false
    }
  }, [])

  return <div>{data && <div role="contentinfo">Name is {data.name}</div>}</div>
}
export default APIComponent
