import { TeamCreateModal } from '../create/TeamCreateModal';
import { Header } from './components/Header';
import { TeamList } from './components/TeamList';

export const TeamListPage = () => {
  return (
    <>
      <Header />
      <TeamList />
      <TeamCreateModal />
    </>
  );
};
