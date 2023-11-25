import { Link } from 'react-router-dom';
import s from './ChooseYourBreakfast.module.css';
import { useTheme } from '../../../components/ToggleSwitch/ThemeContext';
import icons from '../../../assets/icons/icons.svg';

export const ChooseYourBreakfast = () => {
  const { theme } = useTheme();

  return (
    <div className={s.containerImage}>
      <div className={`${s.seeRecipe} ${theme === 'dark' ? s.darkTheme : ''}`}>
        <span className={s.span}>Delicious and healthy</span> way to enjoy a
        variety of fresh ingredients in one satisfying meal <br></br>
        <br></br>
        <Link
          to="/categories/Breakfast"
          className={`${s.see} ${theme === 'dark' ? s.darkTheme : ''}`}
        >
          See recipes
          <svg className={s.arrowIcon}>
            <use
              href={`${icons}#icon-arrow-right-white`}
              fill={theme === 'dark' ? '#fafafa' : 'black'}
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
