'use client';
import { FormEvent, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function LoginPage() {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const res = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });

    if (res?.error) return setError(res.error);

    if (res?.ok) return router.push('/');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {error && <div>{error}</div>}
        <h1>Login</h1>

        <label>Email:</label>
        <input type="email" placeholder="Email" name="email" />

        <label>Password:</label>
        <input type="password" placeholder="Password" name="password" />

        <button>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
