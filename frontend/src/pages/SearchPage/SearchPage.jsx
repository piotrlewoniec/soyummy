import { useSelector } from 'react-redux';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { SearchedRecipesList } from '../../components/SearchedRecipesList/SearchRecipesList';
import { Footer } from '../../components/Footer/Footer';
import { MainPageTitle } from '../../components/MainPageTitle/MainPageTitle';
import Header from '../../components/Header/Header';

export const SearchPage = () => {
  const searchResults = useSelector(state => state.search.recipes);

  return (
    <div>
      <Header />
      <MainPageTitle title="Search" />
      <SearchBar />
      <SearchedRecipesList recipes={searchResults} />
      <Footer />
    </div>
  );
};
