import { SigninForm } from '../../components/SigninForm/SigninForm';
import styles from './SigninPage.module.css';

export const SigninPage = () => {
  return (
    <div className={styles.signinPageContainer}>
      <div className={styles.signinContainer}>
        <div className={styles.topImage}></div>
        <div className={styles.signinFormOverlay}>
          <SigninForm />
        </div>
      </div>
      <div className={styles.bottomImage}></div>
    </div>
  );
};
