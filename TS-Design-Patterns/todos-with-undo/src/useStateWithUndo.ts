import * as React from 'react'
type CommandFunction<State> = (state: State) => State

function createCommandStack<State>(state: State) {
  const stack: string[] = [JSON.stringify(state)]
  return {
    execute(command: CommandFunction<State>) {
      const currentState = JSON.parse(stack[stack.length - 1])
      const newState = command(currentState)
      stack.push(JSON.stringify(newState))
      return newState
    },
    undo() {
      if (stack.length > 0) {
        stack.pop()
      }
      return JSON.parse(stack[stack.length - 1])
    },
  }
}

export function useStateWithUndo<DataType>(
  initialState: DataType
): [DataType, (state: DataType) => void, () => void] {
  const [state, setState] = React.useState<DataType>(initialState)
  const stack = React.useRef(createCommandStack(initialState))

  return [
    state,
    React.useCallback((value: DataType) => {
      const newState = stack.current.execute(() => value)
      setState(newState)
    }, []),
    React.useCallback(() => {
      const newState = stack.current.undo()
      setState(newState)
    }, []),
  ]
}
