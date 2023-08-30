import ListBody from './ListBody/ListBody';
import ListHeader from './ListHeader/ListHeader';
import styles from './list.module.css';

const List = () => (
  <section className={styles.container}>
    <ListHeader />
    <ListBody />
  </section>
);

export default List;
