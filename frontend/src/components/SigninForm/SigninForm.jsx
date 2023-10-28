import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SigninForm.module.css';

export const SigninForm = () => {
  return (
    <div className={styles.registerForm}>
      <h2 className={styles.registrationTitle}>Sign in</h2>
      <form>
        <div className={styles.inputContainer}>
          <svg className={styles.icon}>
            <use xlinkHref="" />
          </svg>
          <input className={styles.input} type="email" placeholder="Email" />
        </div>
        <div className={styles.inputContainer}>
          <svg className={styles.icon}>
            <use xlinkHref="" />
          </svg>
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
          />
        </div>
        <button className={styles.signinButton} type="submit">
          Sign in
        </button>
      </form>
      <Link to="/register" className={styles.link}>
        Registration
      </Link>
    </div>
  );
};
