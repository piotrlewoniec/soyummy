import React, { useState } from 'react';
import { SampleRecipes } from '../../components/SearchedRecipesList/SampleRecipes';
import styles from './SearchPage.module.css';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { SearchedRecipesList } from '../../components/SearchedRecipesList/SearchRecipesList';
import { Pagination } from 'components/Pagination/Pagination';
import { Footer } from '../../components/Footer/Footer';
import { MainPageTitle } from '../../components/MainPageTitle/MainPageTitle';
import Header from '../../components/Header/Header';

export const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = query => {
    const filteredRecipes = SampleRecipes.filter(recipe =>
      recipe.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredRecipes);
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
