import { useDispatch, useSelector } from 'react-redux';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { SearchedRecipesList } from '../../components/SearchedRecipesList/SearchRecipesList';
import { Pagination } from 'components/Pagination/Pagination';
import { Footer } from '../../components/Footer/Footer';
import { MainPageTitle } from '../../components/MainPageTitle/MainPageTitle';
import Header from '../../components/Header/Header';
import { searchRecipesByName } from '../../redux/search/actions';
import styles from './SearchPage.module.css';

export const SearchPage = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector(state => state.search.recipes);

  const handleSearch = query => {
    dispatch(searchRecipesByName(query));
  };

  return (
    <div className={styles.searchPage}>
      <Header />
      <MainPageTitle title="Search" />
      <SearchBar onSearch={handleSearch} />
      <SearchedRecipesList recipes={searchResults} />
      <Pagination />
      <Footer />
    </div>
  );
};
