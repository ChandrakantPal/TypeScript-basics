abstract class Command<State> {
  abstract execute(state: State): State
  abstract undo(state: State): State
}
