import * as React from 'react'
import './App.css'
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

function UL<T>({
  items,
  render,
  itemClick,
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
> & {
  items: T[]
  render: (item: T) => React.ReactNode
  itemClick: (item: T) => void
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li onClick={() => itemClick(item)} key={index}>
          {render(item)}
        </li>
      ))}
    </ul>
  )
}

function App() {
  const initialTodos = React.useMemo(
    () => [
      {
        id: 0,
        text: 'Hey there',
        done: false,
      },
    ],
    []
  )
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
      <UL
        items={todos}
        itemClick={(item) => {}}
        render={(todo) => (
          <div key={todo.id}>
            ({todo.done ? 'Done' : 'Not Done'}){todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </div>
        )}
      />
      <div>
        <input type="text" ref={newTodoRef} />
        <Button onClick={onAddTodo}>Add Todo</Button>
      </div>
    </div>
  )
}

const AppWrapper = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '50% 50%',
    }}
  >
    <App />
  </div>
)

export default AppWrapper
