import { Route, Routes } from 'react-router-dom';
import { AuthPage } from './AuthPage';
import { OAuthPage } from './OAuthPage';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" Component={AuthPage} />
      <Route path="oAuth" Component={OAuthPage} />
    </Routes>
  );
};
