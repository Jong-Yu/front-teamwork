import { Navigate, Route, Routes } from 'react-router-dom';
import { TeamPage } from './TeamPage';
import { TeamListPage } from './list/TeamListPage';

const TeamRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<TeamPage />}>
        <Route path="list" element={<TeamListPage />} />
        <Route path="*" element={<Navigate to="list" replace />} />
      </Route>
    </Routes>
  );
};

export default TeamRoutes;
