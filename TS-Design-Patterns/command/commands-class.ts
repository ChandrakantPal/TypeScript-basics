abstract class Command<State> {
  abstract execute(state: State): State
  abstract undo(state: State): State
}

class CommandStack<State> {
  private stack: Command<State>[] = []
  constructor(private _state: State) {}

  get state() {
    return this._state
  }
}
