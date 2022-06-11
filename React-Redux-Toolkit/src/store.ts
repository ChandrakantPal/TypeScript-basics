import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Todo {
  id: number
  done: boolean
  text: string
}

interface TodoSliceState {
  todos: Todo[]
}

const initialState: TodoSliceState = {
  todos: [],
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos = [
        ...state.todos,
        {
          id: state.todos.length,
          text: action.payload,
          done: false,
        },
      ]
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(({ id }) => id !== action.payload)
    },
  },
})

export const { addTodo, removeTodo } = todosSlice.actions

export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export const selectTodos = (state: RootState) => state.todos.todos
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
