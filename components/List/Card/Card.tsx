import UserAuthor from '@/components/User/UserAuthor';
import styles from './card.module.css';
import Chip from '@/components/Chip/Chip';
import FavIcon from '@/components/Icons/FavIcon/FavIcon';
import LeftArrowIcon from '@/components/Icons/LeftArrowIcon/LeftArrowIcon';

const Card = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <h4>Caba -{'>'} Bahia Blanca</h4> <LeftArrowIcon />
    </div>
    <div className={styles.footer}>
      <UserAuthor />
      <div className={styles.right}>
        <Chip />
        <FavIcon />
      </div>
    </div>
  </div>
);

export default Card;
