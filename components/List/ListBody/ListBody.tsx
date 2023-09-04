'use client';

import { useState } from 'react';
import Card from '../Card/Card';
import styles from './listBody.module.css';

const ListBody = () => {
  const [list, setList] = useState([1, 3, 4, 5]);
  return (
    <ul className={styles.container}>
      {list &&
        list.map((card) => (
          <li className={styles.item} key={card}>
            <Card />
          </li>
        ))}
    </ul>
  );
};

export default ListBody;
