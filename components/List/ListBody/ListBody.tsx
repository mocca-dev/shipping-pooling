'use client';

import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import styles from './listBody.module.css';
import { getAllPosts } from '@/actions/getPosts';
import { Post } from '@/actions/newAction';

export type PostRquest = {
  getPosts: Post[];
};

const ListBody = () => {
  const [list, setList] = useState<Post[]>([]);
  useEffect(() => {
    const getPosts = async () => {
      const posts: PostRquest = await getAllPosts();

      setList(posts.getPosts);
    };
    getPosts();
  }, []);

  return (
    <ul className={styles.container}>
      {list &&
        list.map((card) => (
          <li className={styles.item} key={card._id}>
            <Card data={card} />
          </li>
        ))}
    </ul>
  );
};

export default ListBody;
