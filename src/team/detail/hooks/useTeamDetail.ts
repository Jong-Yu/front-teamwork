import { useParams } from 'react-router-dom';
import { useFindTeamById } from '../../../_query/team/TeamQuerys';
import { useGoPush } from '../../../_shared/hooks/History/History.hooks';

export function useTeamDetail() {
  // hooks
  const params = useParams<{ teamId: string; tabId: string }>();
  const goPush = useGoPush();

  // query
  const { data: team } = useFindTeamById(params.teamId || '');

  // handler
  const onClickTab = (tabId: string) => {
    goPush(`/team/detail/${team?.id}/${tabId}`);
  };

  return {
    team,
    tabId: params.tabId || '',
    onClickTab,
  };
}
