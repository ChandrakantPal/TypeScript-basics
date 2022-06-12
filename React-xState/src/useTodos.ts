import { useMachine } from '@xstate/react'
import * as React from 'react'
import { assign, createMachine } from 'xstate'

interface Todo {
  id: number
  done: boolean
  text: string
}

const todoMachine = createMachine<
  { todos: Todo[] },
  | { type: 'SET_TODOS'; todos: Todo[] }
  | { type: 'ADD_TODO'; text: string }
  | { type: 'REMOVE_TODO'; removeId: number }
>({
  id: 'todoMachine',
  initial: 'editing',
  context: {
    todos: [],
  },
  states: {
    editing: {
      on: {
        ADD_TODO: {
          actions: assign({
            todos: ({ todos }, { text }) => [
              ...todos,
              {
                id: todos.length,
                text,
                done: false,
              },
            ],
          }),
        },
        REMOVE_TODO: {
          actions: assign({
            todos: ({ todos }, { removeId }) =>
              todos.filter(({ id }) => id !== removeId),
          }),
        },
        SET_TODOS: {
          actions: assign({
            todos: (_, { todos }) => todos,
          }),
        },
      },
    },
    working: {},
  },
})

export function useTodos(initialTodos: Todo[]): {
  todos: Todo[]
  addTodo: (text: string) => void
  removeTodo: (id: number) => void
} {
  const [state, send] = useMachine(todoMachine)

  const addTodo = React.useCallback(
    (text: string) => {
      send({
        type: 'ADD_TODO',
        text,
      })
    },
    [send]
  )
  const removeTodo = React.useCallback(
    (removeId: number) => {
      send({
        type: 'REMOVE_TODO',
        removeId,
      })
    },
    [send]
  )
  return { todos: state.context.todos, addTodo, removeTodo }
}
