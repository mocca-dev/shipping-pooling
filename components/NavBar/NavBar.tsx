'use client';
import { usePathname, useRouter } from 'next/navigation';
import FavIcon from '../Icons/FavIcon/FavIcon';
import HomeIcon from '../Icons/HomeIcon/HomeIcon';
import NotificationIcon from '../Icons/NotificationIcon/NotificationIcon';
import PackageIcon from '../Icons/PackageIcon/PackageIcon';
import styles from './navBar.module.css';
import { useEffect, useState } from 'react';

const NavBar = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [activeItems, setActiveItems] = useState({
    '/': true,
    '/favourite': false,
    '/notifications': false,
    '/pals': false,
  });

  useEffect(() => {
    const newActiveItems: any = {
      '/': false,
      '/favourite': false,
      '/notifications': false,
      '/pals': false,
    };

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
        <li className={`${activeItems['/'] ? styles.active : null}`}>
          <HomeIcon />
        </li>
        <li className={`${activeItems['/favourite'] ? styles.active : null}`}>
          <FavIcon />
        </li>
        <li
          className={`${activeItems['/notifications'] ? styles.active : null}`}
        >
          <NotificationIcon />
        </li>
        <li className={`${activeItems['/pals'] ? styles.active : null}`}>
          <PackageIcon />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
