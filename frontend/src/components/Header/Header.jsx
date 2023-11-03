import MenuButton from 'components/MenuButton/MenuButton';
import React from 'react';
import css from './Header.module.css';
import Navigation from 'components/Navigation/Navigation';
import Logo from 'components/Logo/Logo';
import ToggleSwitch from 'components/ToggleSwitch/ToggleSwitch';

const Header = () => {
  return (
    <section className={css.headerSection}>
      <div className={css.headerContent}>
        <Logo />
        <nav className={css.navigationHeader}>
          <Navigation />
        </nav>
        <div className={css.userInfo}>
          <div>User Picture</div>
          <div>User Name</div>
        </div>
        <div className={css.toggleSwitch}>
          <ToggleSwitch />
        </div>
        <MenuButton />
      </div>
    </section>
  );
};

export default Header;
