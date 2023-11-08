import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import styles from './RegisterPage.module.css';
import { useEffect, useState } from 'react';
import { isUserLoged } from '../../redux/userAPI/selectors';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const RegisterPage = () => {
  const userIsLogged = useSelector(isUserLoged);
  const navigate = useNavigate();
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    if (userIsLogged && !hasRedirected) {
      navigate('/signin');
      setHasRedirected(true);
    }
    if (!userIsLogged) {
      setHasRedirected(false);
    }
  }, [userIsLogged, navigate, hasRedirected]);
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
