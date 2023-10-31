import Header from 'components/Header/Header';
import s from './main.module.css';

import { ChooseYourBreakfast } from 'components/Main/ChooseYourBeakfast/ChooseYourBreakfast';
import { Search } from 'components/Main/Search/Search';
import { MainData } from 'components/Main/mainCategories/mainCategories';

export const Main = () => {
  return (
    <div className={s.container}>
      <div className={s.containerback}>
        <Header />
        <div className={s.position}>
          <Search />
          <ChooseYourBreakfast />

          <MainData />
        </div>
      </div>
    </div>
  );
};
