import * as React from 'react'
import './App.css'

const Heading: React.FunctionComponent<{ title: string }> = ({ title }) => (
  <h2>{title}</h2>
)

const Box: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => <div style={{ padding: '1rem', fontWeight: 'bold' }}>{children}</div>

function App() {
  return (
    <div>
      <Heading title="Introduction" />
      <Box>Hello there</Box>
    </div>
  )
}

export default App
