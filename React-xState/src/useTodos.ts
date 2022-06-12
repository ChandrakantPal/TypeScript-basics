import * as React from 'react'
import { createGlobalState } from 'react-use'

interface Todo {
  id: number
  done: boolean
  text: string
}

const useGlobalTodos = createGlobalState<Todo[]>([])

export function useTodos(initialTodos: Todo[]): {
  todos: Todo[]
  addTodo: (text: string) => void
  removeTodo: (id: number) => void
} {
  const [todos, setTodos] = useGlobalTodos()

  React.useEffect(() => {
    setTodos(initialTodos)
  }, [initialTodos])

  const addTodo = React.useCallback(
    (text: string) => {
      setTodos([
        ...todos,
        {
          id: todos.length,
          text: text,
          done: false,
        },
      ])
    },
    [todos]
  )
  const removeTodo = React.useCallback(
    (removeId: number) => {
      setTodos(todos.filter(({ id }) => id !== removeId))
    },
    [todos]
  )
  return { todos, addTodo, removeTodo }
}
