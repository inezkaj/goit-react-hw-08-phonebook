import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../redux/auth/selector';

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return {
    isLoggedIn,
    user,
  };
};

export default useAuth;
