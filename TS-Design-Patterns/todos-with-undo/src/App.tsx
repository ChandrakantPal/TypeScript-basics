import * as React from 'react'
import { useStateWithUndo } from './useStateWithUndo'

interface Todo {
  id: number
  text: string
  done: boolean
}

function App() {
  const [todo, setTodo, undo] = useStateWithUndo<Todo[]>([])

  return <div className="App"></div>
}

export default App
