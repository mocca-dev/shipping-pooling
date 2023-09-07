'use client';

import FieldText from '../FieldText/FieldText';
import { User, handleNewSubmit } from '@/actions/newAction';
import NewButton from './NewButton/NewButton';
import { useState } from 'react';
import ErrorMsg from '../ErrorMsg/ErrorMsg';
import { useSession } from 'next-auth/react';

const NewForm = () => {
  const [error, setError] = useState<string>('');
  const session = useSession();

  return (
    <form
      action={async (formData) => {
        if (session.data?.user) {
          const error = await handleNewSubmit(
            formData,
            (session.data.user as User)._id
          );
          setError(error ? 'No se pudo crear la nueva colaboración.' : '');
        }
      }}
    >
      <FieldText label="Desde" name="from" placeholder="CABA, Córdoba,..." />
      <FieldText label="Hacia" name="to" placeholder="CABA, Córdoba,..." />
      <FieldText label="Fecha límite" name="endDate" placeholder="12/12/12" />
      <NewButton />
      <ErrorMsg error={error} />
    </form>
  );
};

export default NewForm;
