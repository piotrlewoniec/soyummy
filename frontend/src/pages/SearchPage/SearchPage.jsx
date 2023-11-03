import { MainPageTitle } from '../../components/MainPageTitle/MainPageTitle';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { SearchedRecipesList } from '../../components/SearchedRecipesList/SearchRecipesList';
import Header from '../../components/Header/Header';
import styles from './SearchPage.module.css';
import { Footer } from '../../components/Footer/Footer';
import { Pagination } from 'components/Pagination/Pagination';
export const SearchPage = () => {
  return (
    <div className={styles.searchPage}>
      <Header />
      <MainPageTitle title="Search" />
      <SearchBar />
      <SearchedRecipesList />
      <Pagination />
      <Footer />
    </div>
  );
};
