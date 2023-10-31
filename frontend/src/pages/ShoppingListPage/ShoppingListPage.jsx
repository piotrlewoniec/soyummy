import { MainPageTitle } from '../../components/MainPageTitle/MainPageTitle';
import { IngredientsShoppingList } from '../../components/IngredientsShoppingList/IngredientsShoppingList';
import styles from './ShoppingListPage.module.css';
import Header from '../../components/Header/Header';

export const ShoppingListPage = () => {
  return (
    <div className={styles.containerShopingList}>
      <Header />
      <MainPageTitle title="Shopping List" />
      <IngredientsShoppingList />
    </div>
  );
};
