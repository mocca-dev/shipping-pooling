// 'use client';

import styles from './page.module.css';
// import { useSession } from 'next-auth/react';
import List from '@/components/List/List';
import SearchBox from '@/components/SearchBox/SearchBox';

export default function Home() {
  // const { data: session } = useSession();

  return (
    <main className={styles.main}>
      <SearchBox />
      <List />
    </main>
  );
}
