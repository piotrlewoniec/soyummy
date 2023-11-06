import React from 'react';
import styles from './SearchRecipesList.module.css';

export const SearchedRecipesList = ({ recipes, error }) => {
  return (
    <div>
      {error ? (
        <div>
          <div className={styles.image} />
          <p className={styles.imageText}>Try looking for something else...</p>
        </div>
      ) : recipes && recipes.length > 0 ? (
        <ul className={styles.searchedRecipesList}>
          {recipes.map((recipe, index) => (
            <li key={index}>
              <div className={styles.recipeItem}>
                <div
                  className={styles.recipeImageWithText}
                  style={{ backgroundImage: `url(${recipe.thumb})` }}
                >
                  <p className={styles.recipeName}>{recipe.title}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <div className={styles.image} />
          <p className={styles.imageText}>Try looking for something else...</p>
        </div>
      )}
    </div>
  );
};
