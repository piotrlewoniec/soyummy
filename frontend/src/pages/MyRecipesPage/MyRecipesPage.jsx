import styles from './MyRecipesPage.module.css';
import Header from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { MyRecipes } from 'components/MyRecipes/MyRecipes';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { Pagination } from 'components/Pagination/Pagination';
export const MyRecipesPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <MainPageTitle title="My recipes" />
      <MyRecipes />
      <Pagination />
      <Footer />
    </div>
  );
};
