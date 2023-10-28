import { Link } from 'react-router-dom';
import styles from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={styles.authContainer}>
      <div className={styles.authContent}>
        <svg className={styles.logoSvg}>
          <use xlinkHref="/assets/icons/symbol-devs.svg#icon-logo" />
        </svg>

        <h1 className={styles.authTitle}>Welcome to the app!</h1>
        <p className={styles.authDescriptions}>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </p>

        <div className={styles.authButtons}>
          <Link to="/register" className={styles.diagonalButton}>
            Registration
          </Link>
          <Link to="/signin" className={styles.diagonalButton}>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};
