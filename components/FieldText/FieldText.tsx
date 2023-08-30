import { HTMLAttributes } from 'react';
import styles from './fieldtext.module.css';

interface FieldTextProps extends HTMLAttributes<HTMLDivElement> {
  placeholder: string;
  label?: string;
  type?: string;
}

const FieldText = ({
  label = '',
  type = 'text',
  placeholder,
}: FieldTextProps) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        name={type}
      />
    </div>
  );
};

export default FieldText;
