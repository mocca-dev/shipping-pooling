'use client';

import { usePathname } from 'next/navigation';
import { HTMLAttributes } from 'react';
import styles from './header.module.css';
import Link from 'next/link';
import LeftArrowIcon from '@/components/Icons/LeftArrowIcon/LeftArrowIcon';
import ProfileButton from './ProfileButton/ProfileButton';
import WelcomeName from './WelcomeName/WelcomeName';

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

const Header = ({}: HeaderProps) => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      {pathname !== '/login' && pathname !== '/register' && <ProfileButton />}
      {pathname === '/' && <WelcomeName />}
      {pathname.startsWith('/newList') && (
        <span className={styles.title}>
          <Link href={'/'}>
            <LeftArrowIcon />
          </Link>
          <div className={styles.innerTitle}>New list</div>
        </span>
      )}
    </header>
  );
};

export default Header;
