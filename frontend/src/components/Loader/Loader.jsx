// Loader.js lub Loader.jsx
import React from 'react';
import styles from './Loader.module.css';
import { useTheme } from '../../components/ToggleSwitch/ThemeContext';

export const Loader = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${styles.loader} ${theme === 'dark' ? styles.darkTheme : ''}`}
    >
      <div
        className={`${styles.loaderCircle} ${
          theme === 'dark' ? styles.darkTheme : ''
        }`}
      ></div>
      <span
        className={`${styles.loaderText} ${
          theme === 'dark' ? styles.darkTheme : ''
        }`}
      >
        Loading...
      </span>
    </div>
  );
};
