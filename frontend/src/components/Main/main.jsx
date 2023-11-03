import Header from 'components/Header/Header';
import { ChooseYourBreakfast } from './ChooseYourBeakfast/ChooseYourBreakfast';
import { Search } from './Search/Search';
import s from './main.module.css';
import { MainData } from './mainCategories/mainCategories';

export const Main = () => {
  return (
    <div className={s.container}>
      <Header />
      <div className={s.position}>
        <Search />
        <ChooseYourBreakfast />
        <MainData />
      </div>
    </div>
  );
};
