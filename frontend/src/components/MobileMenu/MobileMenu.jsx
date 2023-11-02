import React from 'react';
import css from './MobileMenu.module.css';
import sprite from '../../assets/icons/icons.svg';
import Navigation from 'components/Navigation/Navigation';
import Logo from 'components/Logo/Logo';
import ToggleSwitch from 'components/ToggleSwitch/ToggleSwitch';
import { useTheme } from 'components/ToggleSwitch/ThemeContext';

const MobileMenuModal = ({ isOpen, onClose }) => {
  const { theme } = useTheme();

  if (!isOpen) return null;

  return (
    <div className={css.modal}>
      <div
        className={`${css.modalContent} ${
          theme === 'dark' ? css.darkTheme : ''
        }`}
      >
        <div className={css.topContainer}>
          <Logo onClose={onClose} />
          <button
            className={css.modalCloseButton}
            type="button"
            onClick={onClose}
          >
            <svg
              className={`${css.iconClose} ${
                theme === 'dark' ? css.darkTheme : ''
              }`}
            >
              <use href={`${sprite}#icon-close`}></use>
            </svg>
          </button>
        </div>
        <Navigation onClose={onClose} />
        <div className={css.toggleBox}>
          <ToggleSwitch />
        </div>
      </div>
    </div>
  );
};

export default MobileMenuModal;
