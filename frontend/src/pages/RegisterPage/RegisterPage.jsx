import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import styles from './RegisterPage.module.css';

export const RegisterPage = () => {
  return (
    <div className={styles.registerPageContainer}>
      <div className={styles.registerContainer}>
        <div className={styles.topImage}></div>
        <div className={styles.registerFormOverlay}>
          <RegisterForm />
        </div>
      </div>
      <div className={styles.bottomImage}></div>
    </div>
  );
};
