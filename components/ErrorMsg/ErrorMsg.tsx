import { HTMLAttributes } from 'react';
import styles from './errorMsg.module.css';

interface ErrorMsgProps extends HTMLAttributes<HTMLDivElement> {
  error: string;
}

const ErrorMsg = ({ error }: ErrorMsgProps) => {
  return (
    <>
      {error && (
        <div className={styles.errorMsgContainer}>
          <p className={styles.errorMsg}>{error}</p>
        </div>
      )}
    </>
  );
};

export default ErrorMsg;
