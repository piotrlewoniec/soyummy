import styles from './SeachBar.module.css';
import { SearchForm } from '../SearchForm/SearchForm';
import { SearchTypeSelector } from '../SearchTypeSelector/SearchTypeSelector';
import { useDispatch } from 'react-redux';
import { searchRecipesByName } from '../../redux/search/actions';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const handleSearch = query => {
    dispatch(searchRecipesByName(query));
  };

  return (
    <div className={styles.searchBar}>
      <SearchForm onSearch={handleSearch} />
      <SearchTypeSelector />
    </div>
  );
};
