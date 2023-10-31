import React, { useState, useEffect } from 'react';
import styles from './IngredientsShoppingList.module.css';
import icons from '../../assets/icons/icons.svg';

export const IngredientsShoppingList = () => {
  const [shoppingList] = useState([
    {
      id: 1,
      name: 'Apples',
      quantity: 5,
      image: 'apple.jpg',
    },
    {
      id: 2,
      name: 'Milk',
      quantity: 1,
      image: 'milk.jpg',
    },
    {
      id: 3,
      name: 'Bread',
      quantity: 2,
      image: 'bread.jpg',
    },
    {
      id: 4,
      name: 'Eggs',
      quantity: 12,
      image: 'eggs.jpg',
    },
  ]);

  useEffect(() => {}, []);

  const handleRemoveIngredient = ingredientId => {};

  return (
    <div>
      <ul className={styles.shoppingList}>
        <li className={styles.shoppingListHeader}>
          <span className={styles.productSpan}>Product</span>
          <span className={styles.numberSpan}>Number</span>
          <span className={styles.removeSpan}>Remove</span>
        </li>
        {shoppingList.map(ingredient => (
          <li key={ingredient.id} className={styles.shoppingListItem}>
            <div className={styles.productInfo}>
              <img
                src={ingredient.image}
                alt={ingredient.name}
                className={styles.ingredientImage}
              />
              <span className={styles.ingredientName}>{ingredient.name}</span>
            </div>
            <span className={styles.ingredientQuantity}>
              {ingredient.quantity} {ingredient.unit}
            </span>
            <button
              onClick={() => handleRemoveIngredient(ingredient.id)}
              className={styles.removeButton}
            >
              <svg className={styles.removeIcon}>
                <use href={`${icons}#icon-close`} />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
