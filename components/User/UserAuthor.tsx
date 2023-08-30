import Image from 'next/image';
import styles from './userAuthor.module.css';

const UserAuthor = () => (
  <div className={styles.container}>
    <Image
      src={'https://avatars.githubusercontent.com/u/16454273?v=4'}
      className={styles.profilePic}
      height={50}
      width={50}
      alt=""
    />
    <div>
      <p>Juan Perez</p>
      <p className={styles.at}>@JuanP</p>
    </div>
  </div>
);

export default UserAuthor;
