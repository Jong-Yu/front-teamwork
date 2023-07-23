import { useParams } from 'react-router-dom';
import { useFindTeamById } from '../../../_query/team/TeamQuerys';

export function useTeamDetail() {
  // hooks
  const params = useParams<{ teamId: string }>();

  // query
  const { data: team } = useFindTeamById(params.teamId || '');

  return {
    team,
  };
}
