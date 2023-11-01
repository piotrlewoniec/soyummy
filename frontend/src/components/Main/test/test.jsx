import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCategoryMeals,
  fetchSomeCategories,
} from 'redux/categories/actions';
import {
  selectCategories,
  selectCategoryRecipes,
  selectLoading,
} from 'redux/categories/slice';

import s from './tets.module.css';

export const MainData = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const categoryRecipes = useSelector(selectCategoryRecipes);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchSomeCategories());
  }, [dispatch]);
  // useEffect(() => {
  //   console.log(categories); // Wyświetl kategorie w konsoli
  //   console.log(categoryRecipes); // Wyświetl przepisy w konsoli
  // }, [categories, categoryRecipes]);

  useEffect(() => {
    const categoryNames = categories.map(category => category.strCategory);
    dispatch(fetchCategoryMeals(categoryNames));
  }, [categories, dispatch]);

  return (
    <div className={s.App}>
      <div className={s.container}>
        {categories.map(category => (
          <div className={s.div} key={category.strCategory}>
            <Link
              to={`/categories/${category.strCategory}`}
              className={`${s.category}`}
            >
              {category.strCategory}
            </Link>
            <div>
              <div className={s.recipes}>
                {loading && <p>Ładowanie...</p>}
                {categoryRecipes[category.strCategory] &&
                  categoryRecipes[category.strCategory].map(recipe => (
                    <div className={s.recipe} key={recipe.idMeal}>
                      <Link to={`/recipePage/${recipe.idMeal}`}>
                        <img
                          className={s.img}
                          src={recipe.strMealThumb}
                          alt={recipe.strMeal}
                        />
                        <div className={s.overlay}>{recipe.strMeal}</div>
                      </Link>
                    </div>
                  ))}
              </div>
              <Link
                className={s.link}
                to={`/categories/${category.strCategory}`}
              >
                <div className={s.empty}>
                  <div></div>
                  <button className={s.baton}>See all</button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
