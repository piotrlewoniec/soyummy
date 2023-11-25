import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../../components/ToggleSwitch/ThemeContext';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchCategoryMeals,
  fetchSomeCategories,
} from 'redux/categories/actions';
import s from './mainCategories.module.css';

export const MainData = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryMeals());
    dispatch(fetchSomeCategories());
    // eslint-disable-next-line
  }, []);

  const meals = useSelector(state => state.categories.recipes);
  const categorie = useSelector(state => state.categories.somecategories);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (categorie.length > 0) {
      setCategories(categorie);
    }
  }, [categorie]);

  useEffect(() => {
    if (meals.length > 0) {
    }
  }, [meals]);

  return (
    <div className={`${s.margin} ${theme === 'dark' ? s.darkTheme : ''}`}>
      <div className={s.position}>
        {categories.map(category => (
          <div key={category.title} className={s.categoryContainer}>
            <div
              className={`${s.title} ${theme === 'dark' ? s.darkTheme : ''}`}
            >
              {category.title}
            </div>
            <div className={s.imageFlex}>
              {meals
                .filter(meal => meal.category === category.title)
                .slice(0, 4)
                .map(meal => (
                  <div key={meal._id} className={s.gridItem}>
                    <NavLink
                      className={s.underline}
                      to={`/recipes/${meal._id}`}
                    >
                      <img
                        className={s.img}
                        src={meal.thumb}
                        alt={meal.title}
                      />
                      <div
                        className={`${s.overlay} ${
                          theme === 'dark' ? s.darkTheme : ''
                        }`}
                      >
                        {meal.title}
                      </div>
                    </NavLink>
                  </div>
                ))}
            </div>
            <NavLink
              className={s.batonFlex}
              to={`/categories/${category.title}`}
            >
              <button className={s.baton}>See all</button>
            </NavLink>
          </div>
        ))}
        <NavLink to={`/categories/Beef`} className={s.oth}>
          <button
            className={`${s.other} ${theme === 'dark' ? s.darkTheme : ''}`}
          >
            Other Categories
          </button>
        </NavLink>
      </div>
    </div>
  );
};
