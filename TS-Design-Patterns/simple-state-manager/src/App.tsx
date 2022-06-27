import { createObservable, useObservable } from './useObservable'

const globalState = createObservable({
  count: 0,
})

function App() {
  return <div className="App"></div>
}

export default App
