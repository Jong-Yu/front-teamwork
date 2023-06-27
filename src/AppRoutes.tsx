import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserRoutes } from './user/UserRoutes';
import { AuthRoutes } from './auth/AuthRoutes';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="user/*" Component={UserRoutes} />
        <Route path="auth/*" Component={AuthRoutes} />
      </Routes>
    </BrowserRouter>
  );
};
