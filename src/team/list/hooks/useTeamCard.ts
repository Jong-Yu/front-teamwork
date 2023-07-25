import { useGoPush } from '../../../_shared/hooks/History/History.hooks';

export function useTeamCard() {
  // hooks
  const goPush = useGoPush();

  // handler
  const onClickTeamCard = (teamId: string) => {
    goPush(`/team/detail/${teamId}/info`);
  };

  return {
    onClickTeamCard,
  };
}
