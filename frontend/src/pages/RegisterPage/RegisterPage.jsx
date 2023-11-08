import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import styles from './RegisterPage.module.css';
import { useEffect, useState } from 'react';
import { isUserRegistred } from '../../redux/userAPI/selectors';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const RegisterPage = () => {
  const userIsRegistred = useSelector(isUserRegistred);
  const navigate = useNavigate();
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    if (userIsRegistred && !hasRedirected) {
      navigate('/signin');
      setHasRedirected(true);
    }
    if (!userIsRegistred) {
      setHasRedirected(false);
    }
  }, [userIsRegistred, navigate, hasRedirected]);
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
