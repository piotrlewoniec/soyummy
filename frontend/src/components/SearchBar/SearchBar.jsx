import React from 'react';
import styles from './SeachBar.module.css';
import { SearchForm } from '../SearchForm/SearchForm';
import { SearchTypeSelector } from '../SearchTypeSelector/SearchTypeSelector';

export const SearchBar = ({ onSearch }) => {
  return (
    <div className={styles.searchBar}>
      <SearchForm onSearch={onSearch} />
      <SearchTypeSelector />
    </div>
  );
};
