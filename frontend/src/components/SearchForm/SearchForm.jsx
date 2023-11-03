import React from 'react';
import styles from './SearchForm.module.css';

export const SearchForm = ({ onSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const query = formData.get('query');
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
      ></input>
      <button type="submit" className={styles.buttonSearch}>
        Search
      </button>
    </form>
  );
};
