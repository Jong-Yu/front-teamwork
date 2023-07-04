import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppLayout } from './layout/AppLayout';

const MainPage = lazy(() => import('./main/MainPage'));
const UserRoutes = lazy(() => import('./user/UserRoutes'));
const AuthRoutes = lazy(() => import('./auth/AuthRoutes'));

export const AppRoutes = () => {
  return (
    <BrowserRouter basename="">
      <Routes>
        <Route path="*" Component={AppLayout}>
          <Route path="main/*" Component={MainPage} />
          <Route path="user/*" Component={UserRoutes} />
          <Route path="auth/*" Component={AuthRoutes} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
