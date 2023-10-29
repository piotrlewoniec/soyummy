import React from 'react';
import sprite from '../MobileMenu/symbol-defs.svg';
import css from './Logo.module.css';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <div>
      {' '}
      <svg className={css.logoBackgroung}>
        <use href={`${sprite}#icon-logo`} className={css.iconLogo}></use>
      </svg>
      <nav>
        <NavLink to="/main"></NavLink>
      </nav>
    </div>
  );
};

export default Logo;
