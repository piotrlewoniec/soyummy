import React, { useEffect, useRef } from 'react';
import css from './UserModal.module.css';
import sprite from '../../assets/icons/icons.svg';
import { useTheme } from 'components/ToggleSwitch/ThemeContext';

const UserModal = ({ onClose }) => {
  const { theme } = useTheme();
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (modalRef.current) {
      window.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={css.modalOverlay}>
      <div
        className={`${css.modalContent} ${
          theme === 'dark' ? css.darkTheme : ''
        }`}
        ref={modalRef}
      >
        <button type="button" className={css.editButton}>
          <span className={css.buttonLabel}>Edit profile</span>
          <svg className={css.iconPencil}>
            <use href={`${sprite}#icon-pencil`}></use>
          </svg>
        </button>
        <button type="button" className={css.logOutButton}>
          <span className={css.logOutLabel}>Log out</span>
          <svg className={css.iconArrowRight}>
            <use href={`${sprite}#icon-arrow-right-white`}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UserModal;
