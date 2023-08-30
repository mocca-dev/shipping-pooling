'use client';

import styles from './page.module.css';
import { useSession } from 'next-auth/react';
import FieldText from '@/components/FieldText/FieldText';
import List from '@/components/List/List';

export default function Home() {
  const { data: session } = useSession();
  console.log('Logged', session);

  return (
    <main className={styles.main}>
      <FieldText type="text" placeholder="CABA, Córdoba, Tres Arroyos,..." />
      <List />
    </main>
  );
}
