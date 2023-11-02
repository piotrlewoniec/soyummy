import React from 'react';
import sprite from '../../assets/icons/icons.svg';
import css from './Logo.module.css';
import { NavLink } from 'react-router-dom';

const Logo = ({ onClose }) => {
  return (
    <NavLink to="/main">
      <svg className={css.logoBackgroung} onClick={onClose}>
        <use href={`${sprite}#icon-logo`} className={css.iconLogo}></use>
      </svg>
    </NavLink>
  );
};

export default Logo;
