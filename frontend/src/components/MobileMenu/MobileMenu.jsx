import React from 'react';
import css from './MobileMenu.module.css';
import { NavLink } from 'react-router-dom';
import sprite from './symbol-defs.svg';

const MobileMenuModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={css.modal}>
      <div className={css.modalContent}>
        <nav>
          <div className={css.icon_logo_background}>
            <NavLink to="/main">
              {' '}
              <svg className={css.icon_logo}>
                <use href={`${sprite}#icon-logo`}></use>
              </svg>
            </NavLink>
          </div>
        </nav>
        <button className={css.modalCloseButton} type="button">
          <svg className={css.icon_close} onClick={onClose}>
            <use href={`${sprite}#icon-close`}></use>
          </svg>
        </button>
        <nav className={css.navigation}>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink to="/addrecipes">Add recipes</NavLink>
          <NavLink to="/myrecipes">My recipes</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
          <NavLink to="/shoppinglist">Shopping list</NavLink>
          <NavLink to="/search">Search</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenuModal;
