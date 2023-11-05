import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

// import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchCategoryMeals,
  fetchSomeCategories,
} from 'redux/categories/actions';

import s from './mainCategories.module.css';

export const MainData = () => {
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
    <div className={s.margin}>
      <div className={s.position}>
        {categories.map(category => (
          <div>
            <div className={s.title}>{category.title}</div>
            <div className={s.imageFlex}>
              {meals
                .filter(meal => meal.category === category.title)
                .slice(0, 4)
                .map(meal => (
                  <div className={s.grid}>
                    <NavLink
                      className={s.underline}
                      to={`/recipes/${meal._id}`}
                    >
                      <img className={s.img} src={meal.thumb} alt={s.title} />
                      <div className={s.overlay}> {meal.title} </div>
                    </NavLink>{' '}
                  </div>
                ))}
            </div>
            <NavLink
              className={s.batonFlex}
              to={`/categories/${category.title}`}
            >
              <div></div>
              <button className={s.baton}>See all</button>
            </NavLink>
          </div>
        ))}
        <NavLink to={`/categories/Beef`} className={s.oth}>
          <button className={s.other}>Other Categories</button>
        </NavLink>
      </div>
    </div>
  );
};
