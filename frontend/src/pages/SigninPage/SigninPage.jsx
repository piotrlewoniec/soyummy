import { SigninForm } from 'components/SigninForm/SigninForm';

import styles from './SigninPage.module.css';

export const SigninPage = () => {
  return (
    <div>
      <div className={styles.topImage}></div>
      <SigninForm />
      <div className={styles.bottomImage}></div>
    </div>
  );
};
