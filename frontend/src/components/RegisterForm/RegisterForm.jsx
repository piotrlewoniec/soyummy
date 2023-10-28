import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RegisterForm.module.css';
import icons from '../../assets/icons/icons.svg';

export const RegisterForm = () => {
  return (
    <div className={styles.registerForm}>
      <h2 className={styles.registrationTitle}>Registration</h2>
      <form>
        <div className={styles.inputContainer}>
          <label className={styles.label}>
            <svg className={styles.icon}>
              <use
                xlinkHref={`${icons}#icon-user-1`}
                className={styles.placeholderIcon}
                width="20"
                height="20"
              />
            </svg>
            <input className={styles.input} type="text" placeholder="Name" />
          </label>
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>
            <svg className={styles.icon}>
              <use
                xlinkHref={`${icons}#icon-leter-1`}
                className={styles.placeholderIcon}
                width="20"
                height="20"
              />
            </svg>
            <input className={styles.input} type="email" placeholder="Email" />
          </label>
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>
            <svg className={styles.icon}>
              <use
                xlinkHref={`${icons}#icon-lock-02-1`}
                className={styles.placeholderIcon}
                width="20"
                height="20"
              />
            </svg>
            <input
              className={styles.input}
              type="password"
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
