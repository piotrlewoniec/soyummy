import React from 'react';
import css from './IconSearch.module.css';
import sprite from '../../assets/icons/icons.svg';
import { useTheme } from 'components/ToggleSwitch/ThemeContext';

const IconSearch = () => {
  const { theme } = useTheme();
  return (
    <svg
      className={`${css.iconSearch} ${theme === 'dark' ? css.darkTheme : ''}`}
    >
      <use href={`${sprite}#icon-search`}></use>
    </svg>
  );
};

export default IconSearch;
