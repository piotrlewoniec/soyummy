import { Link } from 'react-router-dom';
import s from './ChooseYourBreakfast.module.css';

export const ChooseYourBreakfast = () => {
  return (
    <div className={s.containerImage}>
      <div className={s.seeRecipe}>
        <span className={s.span}>Delicious and healthy</span> way to enjoy a
        variety of fresh ingredients in one satisfying meal <br></br>
        <br></br>
        <Link to="/categories/Breakfast" className={s.see}>
          See recipes{' '}
        </Link>
      </div>
    </div>
  );
};
