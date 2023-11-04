import styles from './FavoritesPage.module.css';
import Header from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { FavoriteRecipe } from 'components/FavoriteRecipe/FavoriteRecipe';
import { Pagination } from 'components/Pagination/Pagination';
export const FavoritesPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <MainPageTitle title="Favorites" />
      <div className={styles.favoritesContainer}>
        <FavoriteRecipe />
      </div>
      <Pagination />
      <Footer />
    </div>
  );
};
