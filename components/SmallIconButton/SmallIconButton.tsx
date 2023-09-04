import { HTMLAttributes } from 'react';
import styles from './smallIconButton.module.css';
import Loader from '../Loader/Loader';
import SearchIcon from '../Icons/SearchIcon/SearchIcon';

interface SmallIconButton extends HTMLAttributes<HTMLDivElement> {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const SmallIconButton = ({
  onClick,
  type,
  disabled,
  loading,
}: SmallIconButton) => (
  <button
    className={`${styles.container} ${disabled ? styles.disabled : null}`}
    type={type}
    disabled={disabled}
    onClick={onClick}
  >
    <SearchIcon />
    {loading && <Loader />}
  </button>
);

export default SmallIconButton;
