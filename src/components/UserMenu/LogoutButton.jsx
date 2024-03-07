import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return <button onClick={handleLogout}>Log Out</button>;
};

export default LogoutButton;
