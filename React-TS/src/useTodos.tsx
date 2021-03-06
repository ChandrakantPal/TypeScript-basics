import * as React from 'react'

interface Todo {
  id: number
  done: boolean
  text: string
}

type ActionType = { type: 'ADD'; text: string } | { type: 'REMOVE'; id: number }

type UseTodosManagerType = ReturnType<typeof useTodosManager>

const TodoContext = React.createContext<UseTodosManagerType>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
})

export function useTodosManager(initialTodos: Todo[]): {
  todos: Todo[]
  addTodo: (text: string) => void
  removeTodo: (id: number) => void
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
  const removeTodo = React.useCallback((id: number) => {
    dispatch({ type: 'REMOVE', id })
  }, [])
  return { todos, addTodo, removeTodo }
}

export const TodosProvider: React.FunctionComponent<
  React.PropsWithChildren<{
    initialTodos: Todo[]
  }>
> = ({ initialTodos, children }) => (
  <TodoContext.Provider value={useTodosManager(initialTodos)}>
    {children}
  </TodoContext.Provider>
)

export const useTodos = (): Todo[] => {
  const { todos } = React.useContext(TodoContext)
  return todos
}

export const useAddTodo = (): UseTodosManagerType['addTodo'] => {
  const { addTodo } = React.useContext(TodoContext)
  return addTodo
}

export const useRemoveTodo = (): UseTodosManagerType['removeTodo'] => {
  const { removeTodo } = React.useContext(TodoContext)
  return removeTodo
}
