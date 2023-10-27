import { ChooseYourBreakfast } from './ChooseYourBeakfast/ChooseYourBreakfast';
import { Search } from './Search/Search';
import s from './main.module.css';
import { MainCategories } from './mainCategories/mainCategories';

export const Main = () => {
  return (
    <div className={s.container}>
      <div>Place for navigation</div>
      <div className={s.position}>
        <Search />
        <ChooseYourBreakfast />
        <MainCategories />
      </div>
    </div>
  );
};
