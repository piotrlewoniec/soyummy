import { useState } from 'react';
import styles from './SearchTypeSelector.module.css';

export const SearchTypeSelector = () => {
  const [searchType, setSearchType] = useState('query'); // Domyślny typ to 'query'

  const handleSearchTypeChange = event => {
    const selectedType = event.target.value;
    setSearchType(selectedType);

    // Tutaj możesz dodać logikę do aktualizacji parametrów paska adresu
    // np. korzystając z React Router lub innej odpowiedniej biblioteki
  };

  return (
    <div className={styles.searchTypeSelector}>
      <label>
        <input
          type="radio"
          value="query"
          checked={searchType === 'query'}
          onChange={handleSearchTypeChange}
        />
        Title
      </label>
      <label>
        <input
          type="radio"
          value="ingredient"
          checked={searchType === 'ingredient'}
          onChange={handleSearchTypeChange}
        />
        Ingredients
      </label>
    </div>
  );
};
