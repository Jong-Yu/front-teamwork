import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppLayout } from './layout/AppLayout';
import { UserRoutes } from './user/UserRoutes';
import { AuthRoutes } from './auth/AuthRoutes';

export const AppRoutes = () => {
  return (
    <BrowserRouter basename="">
      <Routes>
        <Route path="*" Component={AppLayout}>
          <Route path="user/*" Component={UserRoutes} />
          <Route path="auth/*" Component={AuthRoutes} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
