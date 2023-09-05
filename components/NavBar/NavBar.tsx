'use client';

import { usePathname, useRouter } from 'next/navigation';
import FavIcon from '../Icons/FavIcon/FavIcon';
import HomeIcon from '../Icons/HomeIcon/HomeIcon';
import NotificationIcon from '../Icons/NotificationIcon/NotificationIcon';
import PackageIcon from '../Icons/PackageIcon/PackageIcon';
import styles from './navBar.module.css';
import { useEffect, useState } from 'react';
import AddIcon from '../Icons/AddIcon/AddIcon';

const initialValue = {
  '/': true,
  '/favourite': false,
  '/pals': false,
  '/new': false,
};

const NavBar = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [activeItems, setActiveItems] = useState(initialValue);

  useEffect(() => {
    const newActiveItems: any = { ...initialValue, '/': false };

    newActiveItems[pathName] = true;
    setActiveItems(newActiveItems);
  }, [pathName]);

  const handleItemClick = (e: any) => {
    e.preventDefault();

    let target = e.target;
    const tagName = target.tagName;

    if (tagName === 'UL') return;
    if (tagName === 'path') {
      target = target.parentElement;
    }
    target.classList.toggle('active');
    router.push(target.id);
  };

  return (
    <nav className={styles.container}>
      <ul onClick={handleItemClick}>
        <li className={`${activeItems['/'] ? styles.active : ''}`}>
          <HomeIcon />
        </li>
        <li className={`${activeItems['/favourite'] ? styles.active : ''}`}>
          <FavIcon />
        </li>
        <li className={`${activeItems['/pals'] ? styles.active : ''}`}>
          <PackageIcon />
        </li>
        <li className={`${activeItems['/new'] ? styles.active : ''}`}>
          <AddIcon />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
