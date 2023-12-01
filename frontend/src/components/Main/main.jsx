import Header from 'components/Header/Header';
import { ChooseYourBreakfast } from './ChooseYourBeakfast/ChooseYourBreakfast';
import { Search } from './Search/Search';

import { MainData } from './mainCategories/mainCategories';

export const Main = () => {
  return (
    <div>
      <Header />
      <div>
        <Search />
        <ChooseYourBreakfast />
        <MainData />
      </div>
    </div>
  );
};
