import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthPage } from './AuthPage';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" Component={AuthPage} />
      <Route
        path="kakao/callback"
        element={<Navigate to="/user/list" replace />}
      />
    </Routes>
  );
};

export default AuthRoutes;
