import { Route, Routes } from 'react-router-dom';
import { AuthPage } from './AuthPage';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" Component={AuthPage} />
    </Routes>
  );
};

export default AuthRoutes;
