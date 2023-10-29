import React, { useState } from 'react';
import MobileMenuModal from '../MobileMenu/MobileMenu';
import css from './MenuButton.module.css';
import sprite from '../MobileMenu/symbol-defs.svg';

const MenuButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <button onClick={toggleModal} className={css.menuButton}>
      <svg className={css.icon_menu}>
        <use href={`${sprite}#icon-menu`}></use>
      </svg>
      <MobileMenuModal
        isOpen={isModalOpen}
        onClose={toggleModal}
      ></MobileMenuModal>
    </button>
  );
};

export default MenuButton;
