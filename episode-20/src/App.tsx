import * as React from 'react'
import './App.css'

const Heading: React.FunctionComponent<{ title: string }> = ({ title }) => (
  <h2>{title}</h2>
)

const Box: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => <div style={{ padding: '1rem', fontWeight: 'bold' }}>{children}</div>

const List: React.FC<{ items: string[]; onClick?: (item: string) => void }> = ({
  items,
  onClick,
}) => (
  <ul>
    {items.map((item, index) => (
      <li key={`${index}-${item}`} onClick={() => onClick?.(item)}>
        {item}
      </li>
    ))}
  </ul>
)

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

interface Payload {
  text: string
}

interface Todo {
  id: number
  done: boolean
  text: string
}

type ActionType = { type: 'ADD'; text: string } | { type: 'REMOVE'; id: number }

const useNumber = (initialValue: number) => React.useState<number>(initialValue)

type UseNumberValue = ReturnType<typeof useNumber>[0]
type UseNumberSetValue = ReturnType<typeof useNumber>[1]

const Incrementer: React.FunctionComponent<{
  value: UseNumberValue
  setValue: UseNumberSetValue
}> = ({ value, setValue }) => (
  <Button
    onClick={() => {
      setValue(value + 1)
    }}
    title={`Add - ${value}`}
  />
)

function App() {
  const onListClick = React.useCallback((item: string) => {
    alert(item)
  }, [])

  const [payload, setPayload] = React.useState<Payload | null>(null)

  React.useEffect(() => {
    fetch('/data.json')
      .then((resp) => resp.json())
      .then((data) => {
        setPayload(data)
      })
  }, [])

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
    []
  )

  // Experimental storing the value in ref to avoid state change
  const newTodoRef = React.useRef<HTMLInputElement>(null)

  const onAddTodo = React.useCallback(() => {
    if (newTodoRef.current) {
      dispatch({
        type: 'ADD',
        text: newTodoRef.current.value,
      })
      newTodoRef.current.value = ''
    }
  }, [])

  const [value, setValue] = useNumber(0)

  return (
    <div>
      <Heading title="Introduction" />
      <Box>Hello there</Box>
      <List items={['one', 'two', 'three']} onClick={onListClick} />
      <Box>{JSON.stringify(payload)}</Box>
      <Incrementer value={value} setValue={setValue} />
      <Heading title="Todos" />
      {todos?.map((todo) => (
        <div key={todo.id}>
          {todo.text}
          <Button
            onClick={() =>
              dispatch({
                type: 'REMOVE',
                id: todo.id,
              })
            }
          >
            Remove
          </Button>
        </div>
      ))}
      <div>
        <input type="text" ref={newTodoRef} />
        <Button onClick={onAddTodo}>Add Todo</Button>
      </div>
    </div>
  )
}

export default App
