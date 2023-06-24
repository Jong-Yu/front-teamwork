import { Route, Routes } from 'react-router-dom';
import { UserListPage } from './list/UserListPage';
import { UserCreatePage } from './create/UserCreatePage';

export const UserRoutes = () => {
  return (
    <Routes>
      <Route path="list" Component={UserListPage} />
      <Route path="create" Component={UserCreatePage} />
    </Routes>
  );
};
