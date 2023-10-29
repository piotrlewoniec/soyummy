import React, { useState } from 'react';
import MobileMenuModal from '../MobileMenu/MobileMenu';
import css from './MenuButton.module.css';

const MenuButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button onClick={toggleModal} className={css.menuButton}></button>
      <MobileMenuModal
        isOpen={isModalOpen}
        onClose={toggleModal}
      ></MobileMenuModal>
    </div>
  );
};

export default MenuButton;
