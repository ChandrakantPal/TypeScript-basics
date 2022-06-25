type CommandFunction<State> = (state: State) => [State, (state: State) => State]

function createCommandStack<State>(state: State) {
  const stack: ((state: State) => State)[] = []
  let _state = state
  return {
    execute(command: CommandFunction<State>) {
      const [newState, undoFunction] = command(_state)
      _state = newState
      stack.push(undoFunction)
      return _state
    },
    undo() {
      const command = stack.pop()
      if (command) {
        _state = command(_state)
      }
      return _state
    },
  }
}
