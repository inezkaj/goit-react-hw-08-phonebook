import { Outlet } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import LogoutButton from './LogoutButton';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const { isLoggedIn } = useAuth();
  const { user } = useAuth();

  if (!isLoggedIn) return null;

  return (
    <div className={css.wrapper}>
      <p className={css.username}>{user.email}</p>
      <LogoutButton />
      <Outlet />
    </div>
  );
};

export default UserMenu;
