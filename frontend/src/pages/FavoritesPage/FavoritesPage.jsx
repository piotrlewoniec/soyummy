import styles from './FavoritesPage.module.css';
import Header from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { FavoriteRecipe } from 'components/FavoriteRecipe/FavoriteRecipe';

export const FavoritesPage = () => {
  return (
    <div className={styles.favoritesPage}>
      <Header />
      <MainPageTitle title="Favorites" />
      <FavoriteRecipe />

      <Footer />
    </div>
  );
};
