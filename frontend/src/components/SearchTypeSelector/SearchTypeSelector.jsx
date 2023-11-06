import React, { useState } from 'react';
import styles from './SearchTypeSelector.module.css';

export const SearchTypeSelector = () => {
  const [searchType, setSearchType] = useState('query');

  const handleSearchTypeChange = event => {
    const selectedType = event.target.value;
    setSearchType(selectedType);
  };

  return (
    <div>
      <label className={styles.searchTypeSelector}>
        <p className={styles.searchText}>Search by: </p>
        <select
          value={searchType}
          onChange={handleSearchTypeChange}
          className={styles.customSelect}
        >
          <option value="query">Title</option>
          <option value="ingredient">Ingredients</option>
        </select>
      </label>
    </div>
  );
};
