import s from './categories.module.css';

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories, fetchRecipes } from 'redux/categories/actions';
import { useTheme } from '../../components/ToggleSwitch/ThemeContext';
import { Loader } from '../../components/Loader/Loader';
export const CategoriesData = () => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState(['Beef']);
  const [recipes, setRecipes] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);

  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.items);
  const posilki = useSelector(state => state.categories.recipes);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchCategories());
      await dispatch(fetchRecipes({ categories: selectedCategory }));
      setRecipes(posilki);
      setDataFetched(true);
    };

    fetchData();
  }, [selectedCategory, posilki, dispatch]);

  const handleCategoryClick = category => {
    setSelectedCategory(category);
  };
  if (!dataFetched) {
    return (
      <div className={s.loaderContainer}>
        <Loader />
      </div>
    );
  }
  return (
    <div className={`${s.App} ${theme === 'dark' ? s.darkTheme : ''}`}>
      <div className={s.container}>
        <div className={s.categories}>
          {categories.map(category => (
            <NavLink
              key={category.title}
              to={`/categories/${category.title}`}
              className={`${s.category} ${theme === 'dark' ? s.darkTheme : ''}`}
              onClick={() => handleCategoryClick(category.title)}
            >
              {category.title}
            </NavLink>
          ))}
        </div>
      </div>

      <div className={`${s.recipes} ${theme === 'dark' ? s.darkTheme : ''}`}>
        {recipes.slice(0, 8).map(recipe => (
          <NavLink
            to={`/recipes/${recipe._id}`}
            key={recipe._id}
            className={`${s.recipe} ${theme === 'dark' ? s.darkTheme : ''}`}
          >
            <img src={recipe.thumb} alt={recipe.thumb} />
            <div
              className={`${s.overlay} ${theme === 'dark' ? s.darkTheme : ''}`}
            >
              {recipe.title}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
