import { useFindMyTeam } from '../../_query/team/TeamQuerys';

export const TeamListPage = () => {
  // hooks
  const { data: myTeams } = useFindMyTeam();

  return (
    <>
      <h1>TeamListPage</h1>
      <div>{myTeams?.map(team => team.id)}</div>
    </>
  );
};
