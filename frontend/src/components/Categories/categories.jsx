import s from './categories.module.css';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export const CategoriesData = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Beef');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => response.json())
      .then(data => setCategories(data.categories))
      .catch(error => console.error('error', error));
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
    )
      .then(response => response.json())
      .then(data => {
        setRecipes(data.meals);
        setLoading(false);
      })
      .catch(error => {
        console.error('error', error);
        setLoading(false);
      });
  }, [selectedCategory]);

  const handleCategoryClick = category => {
    setSelectedCategory(category);
  };

  return (
    <div className={s.App}>
      <div className={s.name}>Categories</div>
      <div className={s.container}>
        <div className={s.categories}>
          {categories.map(category => (
            <NavLink
              key={category.strCategory}
              to={`/categories/${category.strCategory}`}
              className={`${s.category} ${
                category.strCategory === selectedCategory ? s.active : ''
              }`}
              onClick={() => handleCategoryClick(category.strCategory)}
            >
              {category.strCategory}
            </NavLink>
          ))}
        </div>
      </div>

      <div className={s.recipes}>
        {loading && <p>Ładowanie...</p>}
        {recipes
          .sort((a, b) => a.strMeal.localeCompare(b.strMeal))
          .slice(0, 8)
          .map(recipe => (
            <NavLink
              to={`/recipes/${recipe.idMeal}`}
              key={recipe.idMeal}
              className={s.recipe}
            >
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              <div className={s.overlay}>{recipe.strMeal}</div>
            </NavLink>
          ))}
      </div>
    </div>
  );
};
