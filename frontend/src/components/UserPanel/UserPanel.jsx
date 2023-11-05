import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../../redux/userAPI/actions';
import css from './UserPanel.module.css';
import UserModal from '../UserModal/UserModal';

const UserPanel = () => {
  const dispatch = useDispatch();
  const { name, avatarURL } = useSelector(state => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <div>
      <button type="button" onClick={openModal} className={css.openModalButton}>
        <div className={css.userPanel}>
          <img src={avatarURL} alt="Avatar" className={css.userAvatar} />
          <span className={css.userName}>{name || <span>User</span>}</span>
        </div>
      </button>
      {isModalOpen && <UserModal onClose={closeModal} />}
    </div>
  );
};

export default UserPanel;
