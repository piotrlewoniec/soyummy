import React, { useState } from 'react';
import styles from './SearchForm.module.css';

export const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        className={styles.input}
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
