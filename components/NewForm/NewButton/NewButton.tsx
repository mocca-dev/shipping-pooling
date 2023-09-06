import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

const NewButton = () => {
  const { pending } = useFormStatus();
  return (
    <PrimaryButton
      label="Crear"
      type="submit"
      loading={pending}
      disabled={pending}
    />
  );
};

export default NewButton;
