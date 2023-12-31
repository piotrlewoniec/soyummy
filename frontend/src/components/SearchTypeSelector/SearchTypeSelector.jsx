import React, { useState } from 'react';
import styles from './SearchTypeSelector.module.css';
import { useTheme } from '../../components/ToggleSwitch/ThemeContext';

export const SearchTypeSelector = () => {
  const { theme } = useTheme();
  const [searchType, setSearchType] = useState('query');

  const handleSearchTypeChange = event => {
    const selectedType = event.target.value;
    setSearchType(selectedType);
  };

  return (
    <div>
      <label className={styles.searchTypeSelector}>
        <p
          className={`${styles.searchText} ${
            theme === 'dark' ? styles.darkTheme : ''
          }`}
        >
          Search by:{' '}
        </p>
        <select
          value={searchType}
          onChange={handleSearchTypeChange}
          className={`${styles.customSelect} ${
            theme === 'dark' ? styles.darkTheme : ''
          }`}
        >
          <option
            className={`${styles.option} ${
              theme === 'dark' ? styles.darkTheme : ''
            }`}
            value="query"
          >
            Title
          </option>
          <option
            className={`${styles.option} ${
              theme === 'dark' ? styles.darkTheme : ''
            }`}
            value="ingredient"
          >
            Ingredients
          </option>
        </select>
      </label>
    </div>
  );
};
