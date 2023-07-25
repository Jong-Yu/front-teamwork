import { Route, Routes } from 'react-router-dom';
import { AuthPage } from './AuthPage';
import { LoginPage } from './login/LoginPage';

const AuthRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="*" Component={AuthPage}>
          <Route path="login" Component={LoginPage} />
        </Route>
      </Routes>
    </>
  );
};

export default AuthRoutes;
