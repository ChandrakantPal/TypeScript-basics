import * as React from 'react'

interface Todo {
  id: number
  done: boolean
  text: string
}

type ActionType = { type: 'ADD'; text: string } | { type: 'REMOVE'; id: number }

export function useTodos(initialTodos: Todo[]): {
  todos: Todo[]
  addTodo: (text: string) => void
} {
  const [todos, dispatch] = React.useReducer(
    (state: Todo[], action: ActionType) => {
      switch (action.type) {
        case 'ADD':
          return [
            ...state,
            {
              id: state.length,
              text: action.text,
              done: false,
            },
          ]
        case 'REMOVE':
          return state.filter(({ id }) => id !== action.id)
        default:
          throw new Error()
      }
    },
    initialTodos
  )
  const addTodo = React.useCallback((text: string) => {
    dispatch({ type: 'ADD', text })
  }, [])
  return { todos, addTodo }
}
