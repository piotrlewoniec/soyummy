import React, { useState } from 'react';
import styles from './SearchForm.module.css';
import { useTheme } from '../../components/ToggleSwitch/ThemeContext';

export const SearchForm = ({ onSearch }) => {
  const { theme } = useTheme();
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      className={`${styles.searchForm} ${
        theme === 'dark' ? styles.darkTheme : ''
      }`}
      onSubmit={handleSubmit}
    >
      <input
        className={`${styles.input} ${
          theme === 'dark' ? styles.darkTheme : ''
        }`}
        type="text"
        autoComplete="off"
        autoFocus
        required
        minLength={3}
        placeholder="Search..."
        name="query"
        value={query}
        onChange={e => setQuery(e.target.value)}
      ></input>
      <button type="submit" className={styles.buttonSearch}>
        Search
      </button>
    </form>
  );
};
