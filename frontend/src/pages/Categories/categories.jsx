import Header from 'components/Header/Header';
// import s from './categories.module.css';
import { CategoriesData } from 'components/Categories/categories';
import { Footer } from 'components/Footer/Footer';

export const Categories = () => {
  return (
    <div>
      <Header />
      <CategoriesData />
      <Footer />
    </div>
  );
};
