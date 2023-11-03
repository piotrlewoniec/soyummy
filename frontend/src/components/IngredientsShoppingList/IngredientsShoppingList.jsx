import React, { useState, useEffect } from 'react';
import styles from './IngredientsShoppingList.module.css';
import icons from '../../assets/icons/icons.svg';
import salomon from '../../assets/images/test-shopp-list/1.png';
import cucamber from '../../assets/images/test-shopp-list/2.png';
import lime from '../../assets/images/test-shopp-list/3.png';
import avocado from '../../assets/images/test-shopp-list/4.png';
import mint from '../../assets/images/test-shopp-list/5.png';
export const IngredientsShoppingList = () => {
  const [shoppingList] = useState([
    {
      id: 1,
      name: 'cucamber',
      quantity: 5,
      image: salomon,
    },
    {
      id: 2,
      name: 'lime',
      quantity: 1,
      image: cucamber,
    },
    {
      id: 3,
      name: 'avocado',
      quantity: 2,
      image: lime,
    },
    {
      id: 4,
      name: 'mint',
      quantity: 12,
      image: avocado,
    },
    {
      id: 5,
      name: 'salomon',
      quantity: 12,
      image: mint,
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
