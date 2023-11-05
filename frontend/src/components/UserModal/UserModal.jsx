import React, { useEffect, useRef, useState } from 'react';
import css from './UserModal.module.css';
import sprite from '../../assets/icons/icons.svg';
import { useTheme } from 'components/ToggleSwitch/ThemeContext';
import { LogoutModal } from 'components/LogOutModal/LogOutModal';

const UserModal = ({ onClose }) => {
  const { theme } = useTheme();
  const modalRef = useRef(null);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

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

  const handleLogoutModalOpen = () => {
    setIsLogoutModalOpen(true);
  };

  const handleLogoutModalClose = () => {
    setIsLogoutModalOpen(false);
  };

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
        <button
          type="button"
          className={css.logOutButton}
          onClick={handleLogoutModalOpen}
        >
          <span className={css.logOutLabel}>Log out</span>
          <svg className={css.iconArrowRight}>
            <use href={`${sprite}#icon-arrow-right-white`}></use>
          </svg>
        </button>
      </div>
      {isLogoutModalOpen && <LogoutModal onClose={handleLogoutModalClose} />}
    </div>
  );
};

export default UserModal;
