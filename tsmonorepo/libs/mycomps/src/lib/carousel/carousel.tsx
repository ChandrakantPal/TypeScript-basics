import styles from './carousel.module.css';

/* eslint-disable-next-line */
export interface CarouselProps {}

export function Carousel(props: CarouselProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Carousel!</h1>
    </div>
  );
}

export default Carousel;
