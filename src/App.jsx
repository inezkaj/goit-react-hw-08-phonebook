import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from 'components/Navigation/Navigation';
import ProtectedRoute from 'components/ProtectedRoute';
import PrivateRoute from 'components/PrivateRoute';
import useAuth from 'hooks/useAuth';

const Home = lazy(() => import('./components/Home'));
const LoginForm = lazy(() => import('./components/LoginForm/LoginForm'));
const RegisterForm = lazy(() =>
  import('./components/RegisterForm/RegisterForm')
);
const PhonebookApp = lazy(() => import('./components/PhonebookApp'));

const App = () => {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="login"
            element={
              <PrivateRoute
                component={<LoginForm />}
                redirectTo={'/contacts'}
              />
            }
          />
          <Route
            path="register"
            element={
              <PrivateRoute
                component={<RegisterForm />}
                redirectTo={'/contacts'}
              />
            }
          />
          <Route
            path="contacts"
            element={
              <ProtectedRoute
                component={<PhonebookApp />}
                redirectTo={'/login'}
              />
            }
          />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
