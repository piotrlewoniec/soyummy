import { SearchForm } from '../../components/SearchForm/SearchForm';
import { SearchTypeSelector } from '../../components/SearchTypeSelector/SearchTypeSelector';
import styles from './SeachBar.module.css';

export const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <SearchForm />
      <SearchTypeSelector />
    </div>
  );
};
