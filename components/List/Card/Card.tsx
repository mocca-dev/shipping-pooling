import UserAuthor from '@/components/User/UserAuthor';
import styles from './card.module.css';
import Chip from '@/components/Chip/Chip';
import FavIcon from '@/components/Icons/FavIcon/FavIcon';
import LeftArrowIcon from '@/components/Icons/LeftArrowIcon/LeftArrowIcon';
import { HTMLAttributes } from 'react';
import { Post } from '@/actions/newAction';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  data: Post;
}

const Card = ({ data }: CardProps) => (
  <div className={styles.container}>
    <div className={styles.header}>
      <h4>
        {data.from} -{'>'} {data.to}
      </h4>
      <LeftArrowIcon />
    </div>
    <div className={styles.footer}>
      <UserAuthor id={data.authorID._id} />
      <div className={styles.right}>
        <Chip />
        <FavIcon />
      </div>
    </div>
  </div>
);

export default Card;
