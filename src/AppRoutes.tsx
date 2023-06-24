import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserRoutes } from './user/UserRoutes';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="user/*" Component={UserRoutes} />
      </Routes>
    </BrowserRouter>
  );
};
