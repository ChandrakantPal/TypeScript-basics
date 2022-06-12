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
  | { type: 'START_WORKING' }
  | { type: 'END_WORKING' }
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
        START_WORKING: {
          target: 'working',
        },
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
    working: {
      exit: assign({
        todos: ({ todos }) => {
          const newTodos = [...todos]
          const undoneTodo = newTodos.find(({ done }) => !done)
          if (undoneTodo) {
            undoneTodo.done = true
          }
          return newTodos
        },
      }),
      on: {
        END_WORKING: {
          target: 'editing',
        },
      },
    },
  },
})

export function useTodos(initialTodos: Todo[]): {
  isEditing: boolean
  todos: Todo[]
  addTodo: (text: string) => void
  removeTodo: (id: number) => void
  startWorking: () => void
  endWorking: () => void
} {
  const [state, send] = useMachine(todoMachine)

  React.useEffect(() => {
    send({
      type: 'SET_TODOS',
      todos: initialTodos,
    })
  }, [send, initialTodos])

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

  const startWorking = React.useCallback(() => {
    send('START_WORKING')
  }, [send])

  const endWorking = React.useCallback(() => {
    send('END_WORKING')
  }, [send])

  return {
    isEditing: state.matches('editing'),
    todos: state.context.todos,
    addTodo,
    removeTodo,
    startWorking,
    endWorking,
  }
}
