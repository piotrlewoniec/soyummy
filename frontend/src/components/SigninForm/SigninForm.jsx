import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SigninForm.module.css';
import icons from '../../assets/icons/icons.svg';

export const SigninForm = () => {
  return (
    <div>
      <form className={styles.signinForm}>
        <h2 className={styles.signinTitle}>Sign in</h2>
        <div className={styles.inputContainer}>
          <label className={styles.label}>
            <svg className={styles.icon}>
              <use href={`${icons}#icon-input-envelope`} />
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
              <use href={`${icons}#icon-input-lock`} />
            </svg>

            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="Password"
            />
          </label>
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
