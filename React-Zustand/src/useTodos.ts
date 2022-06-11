import * as React from 'react'
import create from 'zustand'

interface Todo {
  id: number
  done: boolean
  text: string
}

const useTodos = create<{
  todos: Todo[]
}>((set) => ({
  todos: [],
  addTodo: (text: string) =>
    set((state) => ({
      ...state.todos,
      todos: [
        ...state.todos,
        {
          id: state.todos.length,
          text,
          done: false,
        },
      ],
    })),
  removeTodo: (removeId: number) =>
    set((state) => ({
      ...state,
      todos: state.todos.filter(({ id }) => id !== removeId),
    })),
}))

export default useTodos
