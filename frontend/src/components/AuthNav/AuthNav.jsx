import styles from './AuthNav.module.css';
import icons from '../../assets/icons/icons.svg';

export const AuthNav = () => {
  return (
    <div className={styles.authContainer}>
      <div className={styles.authContent}>
        <svg className={styles.logoSvg}>
          <use href={`${icons}#icon-logo`} className={styles.logo} />
        </svg>

        <h1 className={styles.authTitle}>Welcome to the app!</h1>
        <p className={styles.authDescriptions}>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </p>

        <nav className={styles.authButtons}>
          <button className={styles.diagonalButton}>
            <a className={styles.diagonalButtonText} href="/soyummy/register">
              Registration
            </a>
          </button>
          <button className={styles.diagonalButton}>
            <a className={styles.diagonalButtonText} href="/soyummy/signin">
              Sign in
            </a>
          </button>
        </nav>
      </div>
    </div>
  );
};
