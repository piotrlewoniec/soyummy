import React, { useEffect, useState } from 'react';
import styles from './IngredientsShoppingList.module.css';
import icons from '../../assets/icons/icons.svg';
import { useTheme } from '../../components/ToggleSwitch/ThemeContext';

export const IngredientsShoppingList = () => {
  const { theme } = useTheme();
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  useEffect(() => {
    const storedIngredients =
      JSON.parse(localStorage.getItem('selectedIngredients')) || [];
    setSelectedIngredients(
      storedIngredients.map(ingredient => ({
        ...ingredient,
        measure: (ingredient.measure || '').slice(0, 4),
      }))
    );
  }, []);

  const handleRemoveIngredient = ingredientId => {
    const updatedIngredients = selectedIngredients.filter(
      ingredient => ingredient._id !== ingredientId
    );
    setSelectedIngredients(updatedIngredients);
    localStorage.setItem(
      'selectedIngredients',
      JSON.stringify(updatedIngredients)
    );
  };

  return (
    <div>
      <ul
        className={`${styles.shoppingList} ${
          theme === 'dark' ? styles.darkTheme : ''
        }`}
      >
        <li
          className={`${styles.shoppingListHeader} ${
            theme === 'dark' ? styles.darkTheme : ''
          }`}
        >
          <span className={styles.productSpan}>Product</span>
          <span className={styles.numberSpan}>Number</span>
          <span className={styles.removeSpan}>Remove</span>
        </li>

        {selectedIngredients.map((ingredient, index) => (
          <li key={index} className={styles.shoppingListItem}>
            <div className={styles.productInfo}>
              <div
                className={`${styles.ingredientImageContainer} ${
                  theme === 'dark' ? styles.darkTheme : ''
                }`}
              >
                <img
                  src={ingredient.thb}
                  alt={ingredient.ttl}
                  className={styles.ingredientImage}
                />
              </div>
              <span
                className={`${styles.ingredientName} ${
                  theme === 'dark' ? styles.darkTheme : ''
                }`}
              >
                {ingredient.ttl}
              </span>
            </div>
            <span
              className={`${styles.ingredientQuantity} ${
                theme === 'dark' ? styles.darkTheme : ''
              }`}
            >
              {ingredient.measure}
            </span>
            <button
              onClick={() => handleRemoveIngredient(ingredient._id)}
              className={styles.removeButton}
            >
              <svg
                className={`${styles.removeIcon} ${
                  theme === 'dark' ? styles.darkTheme : ''
                }`}
              >
                <use href={`${icons}#icon-close`} />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
