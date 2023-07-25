import { useFindMyTeam } from '../../../_query/team/TeamQuerys';

export function useTeamList() {
  //
  const { data: myTeams } = useFindMyTeam();

  return {
    myTeams,
  };
}
