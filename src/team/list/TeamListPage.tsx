import { TeamCreateModal } from '../create/TeamCreateModal';
import { Header } from './components/Header';
import { TeamList } from './components/TeamList';
import { Map } from '../../_shared/ui/Map/Map';

export const TeamListPage = () => {
  return (
    <>
      <Map />
      <Header />
      <TeamList />
      <TeamCreateModal />
    </>
  );
};
