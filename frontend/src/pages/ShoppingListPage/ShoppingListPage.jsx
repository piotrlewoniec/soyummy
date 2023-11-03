import { MainPageTitle } from '../../components/MainPageTitle/MainPageTitle';
import { IngredientsShoppingList } from '../../components/IngredientsShoppingList/IngredientsShoppingList';
import styles from './ShoppingListPage.module.css';
import Header from '../../components/Header/Header';
import { Footer } from 'components/Footer/Footer';

export const ShoppingListPage = () => {
  return (
    <div className={styles.containerShopingList}>
      <Header />
      <MainPageTitle title="Shopping List" />
      <div className={styles.shoppingListContainer}>
        <IngredientsShoppingList />
      </div>

      <Footer />
    </div>
  );
};
