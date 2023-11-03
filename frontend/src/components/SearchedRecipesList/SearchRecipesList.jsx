import React from 'react';
import styles from './SearchRecipesList.module.css';

export const SearchedRecipesList = ({ recipes }) => {
  return (
    <div className={styles.searchedRecipesList}>
      {recipes && recipes.length > 0 ? (
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>
              <div className={styles.recipeItem}>
                <div
                  className={styles.recipeImageWithText}
                  style={{ backgroundImage: `url(${recipe.image})` }}
                >
                  <p className={styles.recipeName}>{recipe.name}</p>
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
