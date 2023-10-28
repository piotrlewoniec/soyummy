import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import styles from './RegisterPage.module.css';

export const RegisterPage = () => {
  return (
    <div>
      <div className={styles.topImage}></div>
      <RegisterForm />
      <div className={styles.bottomImage}></div>
    </div>
  );
};
