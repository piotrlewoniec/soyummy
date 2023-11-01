import React, { useState } from 'react';
import MobileMenuModal from '../MobileMenu/MobileMenu';
import css from './MenuButton.module.css';
import sprite from '../../assets/icons/icons.svg';
import { useTheme } from 'components/ToggleSwitch/ThemeContext';

const MenuButton = () => {
  const { theme } = useTheme();
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button type="button" onClick={toggleModal} className={css.menuButton}>
        <svg
          className={`${css.iconMenu} ${theme === 'dark' ? css.darkTheme : ''}`}
        >
          <use href={`${sprite}#icon-menu`}></use>
        </svg>
      </button>
      <MobileMenuModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
};

export default MenuButton;
