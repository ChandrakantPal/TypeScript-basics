import * as React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './store'
import { useTodos } from './useTodos'

const Heading: React.FunctionComponent<{ title: string }> = ({ title }) => (
  <h2>{title}</h2>
)

const Box: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => <div style={{ padding: '1rem', fontWeight: 'bold' }}>{children}</div>

const Button: React.FunctionComponent<
  React.PropsWithChildren<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > & {
      title?: string
    }
  >
> = ({ title, children, style, ...rest }) => (
  <button
    {...rest}
    style={{
      ...style,
      backgroundColor: 'red',
      color: 'white',
      fontSize: 'xx-large',
    }}
  >
    {title ?? children}
  </button>
)

const initialTodos = [
  {
    id: 0,
    text: 'Hey there',
    done: false,
  },
]

function App() {
  const { todos, addTodo, removeTodo } = useTodos(initialTodos)

  // Experimental storing the value in ref to avoid state change
  const newTodoRef = React.useRef<HTMLInputElement>(null)

  const onAddTodo = React.useCallback(() => {
    if (newTodoRef.current) {
      addTodo(newTodoRef.current.value)
      newTodoRef.current.value = ''
    }
  }, [addTodo])

  return (
    <div>
      <Heading title="Introduction" />
      <Box>Hello there</Box>
      <Heading title="Todos" />
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.text}
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </div>
      ))}
      <div>
        <input type="text" ref={newTodoRef} />
        <Button onClick={onAddTodo}>Add Todo</Button>
      </div>
    </div>
  )
}

const JustTheTodos = () => {
  const { todos, addTodo, removeTodo } = useTodos(initialTodos)
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </>
  )
}

const AppWrapper = () => (
  <Provider store={store}>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '50% 50%',
      }}
    >
      <App />
      <JustTheTodos />
    </div>
  </Provider>
)

export default AppWrapper
