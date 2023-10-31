import s from './tets.module.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const MainData = () => {
  const [categories, setCategories] = useState([]);
  const [categoryRecipes, setCategoryRecipes] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => response.json())
      .then(data => {
        const selectedCategories = data.categories.filter(category =>
          ['Breakfast', 'Chicken', 'Miscellaneous', 'Dessert'].includes(
            category.strCategory
          )
        );
        setCategories(selectedCategories);
      })
      .catch(error => console.error('error', error));
  }, []);

  useEffect(() => {
    setLoading(true);
    Promise.all(
      categories.map(category => {
        return fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`
        )
          .then(response => response.json())
          .then(data => {
            return {
              category: category.strCategory,
              meals: data.meals.slice(0, 4),
            };
          })
          .catch(error => {
            console.error('error', error);
            return {
              category: category.strCategory,
              meals: [],
            };
          });
      })
    ).then(results => {
      const categoryRecipes = {};
      results.forEach(result => {
        categoryRecipes[result.category] = result.meals;
      });
      setCategoryRecipes(categoryRecipes);
      setLoading(false);
    });
  }, [categories]);

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
