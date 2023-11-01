import React from 'react';
import css from './IconSearch.module.css';
import sprite from '../../assets/icons/icons.svg';

const IconSearch = () => {
  return (
    <svg className={css.iconSearch}>
      <use href={`${sprite}#icon-search`}></use>
    </svg>
  );
};

export default IconSearch;
