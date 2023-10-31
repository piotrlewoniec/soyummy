import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={(css.navigation, css.navigationMobileMenu)}>
      <NavLink to="/categories/:categoryName">Categories</NavLink>
      <NavLink to="/addrecipes">Add recipes</NavLink>
      <NavLink to="/myrecipes">My recipes</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
      <NavLink to="/shopping-list">Shopping list</NavLink>
      <NavLink to="/search">Search</NavLink>
    </nav>
  );
};

export default Navigation;
