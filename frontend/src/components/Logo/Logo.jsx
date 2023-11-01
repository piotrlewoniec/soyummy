import React from 'react';
import sprite from '../../assets/icons/icons.svg';
import css from './Logo.module.css';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <nav>
      <NavLink to="/main">
        <svg className={css.logoBackgroung}>
          <use href={`${sprite}#icon-logo`} className={css.iconLogo}></use>
        </svg>
      </NavLink>
    </nav>
  );
};

export default Logo;
