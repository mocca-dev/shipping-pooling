import { useSession } from 'next-auth/react';
import styles from './welcomeName.module.css';

const WelcomeName = () => {
  const session = useSession();

  return (
    <span>
      <div className={styles.welcome}>
        {session.status === 'authenticated'
          ? 'Hola, ' + session.data?.user?.name
          : 'Bienvenido, a Shipping Pooling'}
      </div>
    </span>
  );
};

export default WelcomeName;
