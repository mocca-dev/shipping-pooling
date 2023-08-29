import { HTMLAttributes } from 'react';
import styles from './primary.module.css';
import Loader from '../Loader/Loader';

interface PrimaryButtonProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const PrimaryButton = ({
  label,
  type,
  disabled,
  loading,
}: PrimaryButtonProps) => (
  <button
    className={`${styles.container} ${disabled ? styles.disabled : null}`}
    type={type}
    disabled={disabled}
  >
    <div>{label}</div>
    {loading && <Loader />}
  </button>
);

export default PrimaryButton;
