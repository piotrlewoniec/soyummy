import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RegisterForm.module.css';

export const RegisterForm = () => {
  return (
    <div className={styles.registerForm}>
      <h2 className={styles.registrationTitle}>Registration</h2>
      <form>
        <div className={styles.inputContainer}>
          <svg className={styles.icon}>
            <use xlinkHref="" />
          </svg>
          <input className={styles.input} type="text" placeholder="Name" />
        </div>
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
