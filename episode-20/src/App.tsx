import * as React from 'react'
import './App.css'

const Heading: React.FunctionComponent<{ title: string }> = ({ title }) => (
  <h2>{title}</h2>
)

const Box: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => <div style={{ padding: '1rem', fontWeight: 'bold' }}>{children}</div>

const List: React.FC<{ items: string[]; onClick?: (item: string) => void }> = ({
  items,
  onClick,
}) => (
  <ul>
    {items.map((item, index) => (
      <li key={`${index}-${item}`} onClick={() => onClick?.(item)}>
        {item}
      </li>
    ))}
  </ul>
)

interface Payload {
  text: string
}

function App() {
  const onListClick = React.useCallback((item: string) => {
    alert(item)
  }, [])

  const [payload, setPayload] = React.useState<Payload | null>(null)

  return (
    <div>
      <Heading title="Introduction" />
      <Box>Hello there</Box>
      <List items={['one', 'two', 'three']} onClick={onListClick} />
    </div>
  )
}

export default App
