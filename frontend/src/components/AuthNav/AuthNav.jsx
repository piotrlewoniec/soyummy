import styles from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={styles.authContainer}>
      <div className={styles.authContent}>
        <svg className={styles.logoSvg}>
          <use xlinkHref="/assets/icons/symbol-devs.svg#icon-logo" />
        </svg>

        <h1>Welcome to the app!</h1>
        <p>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </p>

        <div className={styles.authButtons}>
          <button className={styles.diagonalButton}>
            <span className={styles.textButton}>Registration</span>
          </button>
          <button className={styles.diagonalButton}>
            <span className={styles.textButton}>Sign In</span>
          </button>
        </div>
      </div>
    </div>
  );
};
