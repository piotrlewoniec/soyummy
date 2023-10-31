import Header from 'components/Header/Header';
// import s from './categories.module.css';
import { CategoriesData } from 'components/Categories/categories';

export const Categories = () => {
  return (
    <div>
      <Header />
      <CategoriesData />
    </div>
  );
};
