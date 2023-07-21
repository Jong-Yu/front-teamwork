import { Route, Routes } from 'react-router-dom';
import { TeamPage } from './TeamPage';
import { TeamListPage } from './list/TeamListPage';
import { TeamCreatePage } from './create/TeamCreatePage';

const TeamRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="*" Component={TeamPage}>
          <Route path="list" Component={TeamListPage} />
          <Route path="create" Component={TeamCreatePage} />
        </Route>
      </Routes>
    </>
  );
};

export default TeamRoutes;
