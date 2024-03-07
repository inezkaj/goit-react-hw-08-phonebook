import { NavLink } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import useAuth from '../../hooks/useAuth';
import css from './Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={css.header}>
      <nav>
        <NavLink to="/" className={css.link}>
          Home
        </NavLink>

        {!isLoggedIn && (
          <>
            <NavLink to="/register" className={css.link}>
              Register
            </NavLink>
            <NavLink to="/login" className={css.link}>
              Log In
            </NavLink>
          </>
        )}
        {isLoggedIn && (
          <>
            <NavLink to="/contacts" className={css.link}>
              Phonebook
            </NavLink>
            <UserMenu className={css.link} />
          </>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
