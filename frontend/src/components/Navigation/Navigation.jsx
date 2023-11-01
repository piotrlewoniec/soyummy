import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import IconSearch from 'components/IconSearch/IconSearch';
import { useTheme } from 'components/ToggleSwitch/ThemeContext';

const Navigation = () => {
  const { theme } = useTheme();
  return (
    <nav
      className={`${css.navigation} ${css.navigationMobileMenu} ${
        theme === 'dark' ? css.darkTheme : ''
      }`}
    >
      <NavLink to="/categories/:categoryName">Categories</NavLink>
      <NavLink to="/addrecipes">Add recipes</NavLink>
      <NavLink to="/myrecipes">My recipes</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
      <NavLink to="/shopping-list">Shopping list</NavLink>
      <NavLink to="/search" className={css.searchLink}>
        <IconSearch />
        <span className={css.searchText}>Search</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;
