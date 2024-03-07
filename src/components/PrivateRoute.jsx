import useAuth from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ component, redirectTo }) {
  const { isLoggedIn } = useAuth();
  return !isLoggedIn ? component : <Navigate to={redirectTo} />;
}
