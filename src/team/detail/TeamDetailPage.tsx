import { useTeamDetail } from './hooks/useTeamDetail';
import { Header } from './components/Header';

export const TeamDetailPage = () => {
  // hooks
  const { team } = useTeamDetail();

  return (
    <>
      <Header title={team?.name || ''} />
    </>
  );
};
