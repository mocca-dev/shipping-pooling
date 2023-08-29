'use client';
import { FormEvent, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';
import FieldText from '@/components/FieldText/FieldText';
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import LogoIcon from '@/components/Icons/LogoIcon/LogoIcon';

function LoginPage() {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    if (!email) {
      return setError('Falta especificar el email');
    }

    if (!password) {
      return setError('Falta especificar la contraseña');
    }

    setLoading(true);
    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (res?.error) return setError(res.error);

    if (res?.ok) return router.push('/');
  };

  return (
    <div className={styles.container}>
      <LogoIcon />
      <h2>Bienvenido</h2>
      <form onSubmit={handleSubmit}>
        <FieldText label="Email" type="email" placeholder="john@mail.com" />
        <FieldText label="Password" type="password" placeholder="*******" />

        {error && (
          <div className={styles.errorMsgContainer}>
            <p className={styles.errorMsg}>{error}</p>
          </div>
        )}
        <PrimaryButton label="Ingresar" loading={loading} disabled={loading} />
      </form>
    </div>
  );
}

export default LoginPage;
