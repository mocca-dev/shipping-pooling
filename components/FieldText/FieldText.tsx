import { HTMLAttributes } from 'react';
import styles from './fieldtext.module.css';

interface FieldTextProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  type: string;
  placeholder: string;
}

const FieldText = ({ label, type, placeholder }: FieldTextProps) => {
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
