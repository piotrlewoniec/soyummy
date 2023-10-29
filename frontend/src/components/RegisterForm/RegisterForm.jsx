import { Link } from 'react-router-dom';
import styles from './RegisterForm.module.css';
import icons from '../../assets/icons/icons.svg';

export const RegisterForm = () => {
  return (
    <div>
      <form className={styles.registerForm}>
        <h2 className={styles.registerTitle}>Registration</h2>
        <div className={styles.inputContainer}>
          <label className={styles.label}>
            <svg className={styles.icon}>
              <use href={`${icons}#icon-user-1`} />
            </svg>
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="Username"
            />
          </label>

          <label className={styles.label}>
            <svg className={styles.icon}>
              <use href={`${icons}#icon-leter-1`} />
            </svg>
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Email"
            />
          </label>

          <label className={styles.label}>
            <svg className={styles.icon}>
              <use href={`${icons}#icon-lock-02-1`} />
            </svg>

            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="Password"
            />
          </label>
        </div>
        <button className={styles.registerButton} type="submit">
          Sign up
        </button>
      </form>
      <Link to="/signin" className={styles.link}>
        Sign in
      </Link>
    </div>
  );
};
