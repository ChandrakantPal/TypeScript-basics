// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { Carousel } from '@tsmonorepo/mycomps';
export function App() {
  return (
    <>
      <NxWelcome title="myapp" />
      <Carousel />
      <div />
    </>
  );
}

export default App;
