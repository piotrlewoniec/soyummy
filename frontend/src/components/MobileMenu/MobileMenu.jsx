import React from 'react';
import css from './MobileMenu.module.css';
import sprite from '../../assets/icons/icons.svg';
import Navigation from 'components/Navigation/Navigation';
import Logo from 'components/Logo/Logo';

const MobileMenuModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={css.modal}>
      <div className={css.modalContent}>
        <div className={css.topContainer}>
          <Logo />
          <button className={css.modalCloseButton} type="button">
            <svg className={css.iconClose} onClick={onClose}>
              <use href={`${sprite}#icon-close`}></use>
            </svg>
          </button>
        </div>
        <nav>
          <Navigation />
        </nav>
      </div>
    </div>
  );
};

export default MobileMenuModal;
