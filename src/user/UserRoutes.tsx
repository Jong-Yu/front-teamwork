import { Route, Routes } from 'react-router-dom';
import { UserListPage } from './list/UserListPage';
import { UserCreatePage } from './create/UserCreatePage';
import { UserPage } from './UserPage';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="*" Component={UserPage}>
        <Route path="list" Component={UserListPage} />
        <Route path="create" Component={UserCreatePage} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
