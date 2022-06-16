import styles from './mycomps.module.css';

/* eslint-disable-next-line */
export interface MycompsProps {}

export function Mycomps(props: MycompsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Mycomps!</h1>
    </div>
  );
}

export default Mycomps;
