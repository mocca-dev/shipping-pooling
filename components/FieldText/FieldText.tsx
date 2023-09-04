import { HTMLAttributes } from 'react';
import styles from './fieldtext.module.css';

interface FieldTextProps extends HTMLAttributes<HTMLDivElement> {
  placeholder: string;
  label?: string;
  type?: string;
  margin?: boolean;
  name?: string;
}

const FieldText = ({
  label = '',
  type = 'text',
  placeholder,
  margin = true,
  name,
}: FieldTextProps) => {
  return (
    <div className={`${styles.container} ${margin ? styles.margin1015 : null}`}>
      {label ? <label className={styles.label}>{label}</label> : null}
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default FieldText;
