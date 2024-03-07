import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import useAuth from '../../hooks/useAuth';

const LogoutButton = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return <button onClick={handleLogout}>Log Out</button>;
};

export default LogoutButton;
