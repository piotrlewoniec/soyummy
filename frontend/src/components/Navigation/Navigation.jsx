import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import IconSearch from 'components/IconSearch/IconSearch';
import { useTheme } from 'components/ToggleSwitch/ThemeContext';

const Navigation = ({ onClose }) => {
  const { theme } = useTheme();
  return (
    <nav
      className={`${css.navigation} ${css.navigationMobileMenu} ${
        theme === 'dark' ? css.darkTheme : ''
      }`}
    >
      <NavLink to="/categories/Beef" onClick={onClose}>
        Categories
      </NavLink>
      <NavLink to="/addrecipes" onClick={onClose}>
        Add recipes
      </NavLink>
      <NavLink to="/myrecipes" onClick={onClose}>
        My recipes
      </NavLink>
      <NavLink to="/favorites" onClick={onClose}>
        Favorites
      </NavLink>
      <NavLink to="/shopping-list" onClick={onClose}>
        Shopping list
      </NavLink>
      <NavLink to="/search" className={css.searchLink} onClick={onClose}>
        <IconSearch />
        <span className={css.searchText}>Search</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;
