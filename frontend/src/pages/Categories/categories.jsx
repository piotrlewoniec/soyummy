import Header from 'components/Header/Header';
// import s from './categories.module.css';
import { MainPageTitle } from '../../components/MainPageTitle/MainPageTitle';
import { CategoriesData } from 'components/Categories/categories';

import { Footer } from 'components/Footer/Footer';

export const Categories = () => {
  return (
    <div>
      <Header />
      <MainPageTitle title="Categories" />
      <CategoriesData />
      <Footer />
    </div>
  );
};
