import React, { useEffect, useRef } from 'react';
import css from './UserModal.module.css';
import sprite from '../../assets/icons/icons.svg';
import { useTheme } from 'components/ToggleSwitch/ThemeContext';
import { logOut } from 'redux/userAPI/actions';
import { useDispatch } from 'react-redux';

const UserModal = ({ onClose }) => {
  const { theme } = useTheme();
  const modalRef = useRef(null);
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(logOut())
      .then(() => {
        onClose();
        window.location.href = 'http://localhost:3001/soyummy/';
      })
      .catch(error => {
        console.error('Logout error:', error);
      });
  };

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
        <button
          type="button"
          className={css.logOutButton}
          onClick={handleLogoutClick}
        >
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
