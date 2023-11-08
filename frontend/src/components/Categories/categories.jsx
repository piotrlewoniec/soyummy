import s from './categories.module.css';

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories, fetchRecipes } from 'redux/categories/actions';

export const CategoriesData = () => {
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
    return <div className={s.loading}>Loading data.....</div>;
  }
  return (
    <div className={s.App}>
      <div className={s.name}>Categories</div>
      <div className={s.container}>
        <div className={s.categories}>
          {categories.map(category => (
            <NavLink
              key={category.title}
              to={`/categories/${category.title}`}
              className={s.category}
              onClick={() => handleCategoryClick(category.title)}
            >
              {category.title}
            </NavLink>
          ))}
        </div>
      </div>

      <div className={s.recipes}>
        {recipes.slice(0, 8).map(recipe => (
          <NavLink
            to={`/recipes/${recipe._id}`}
            key={recipe._id}
            className={s.recipe}
          >
            <img src={recipe.thumb} alt={recipe.thumb} />
            <div className={s.overlay}>{recipe.title}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
