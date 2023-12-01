import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/operation';
import {
  ButtonList,
  LogOutButton,
  LogOutContainer,
  LogOutText,
} from './LogOutModal.module';

export const LogoutModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
    localStorage.clear();
  };

  return (
    <LogOutContainer>
      <LogOutText>Are you sure you want to log out?</LogOutText>
      <ButtonList>
        <LogOutButton onClick={handleLogout}>Log out</LogOutButton>
        <LogOutButton onClick={onClose} className="Primary">
          Cancel
        </LogOutButton>
      </ButtonList>
    </LogOutContainer>
  );
};
