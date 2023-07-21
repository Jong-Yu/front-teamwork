import styled from '@emotion/styled';
import { useTeamList } from '../hooks/useTeamList';
import { TeamCard } from './TeamCard';
import { TeamEmpty } from './TeamEmpty';

const Container = styled.div({
  height: 'calc(100vh - 60px)',
});

export const TeamList = () => {
  // hooks
  const { myTeams } = useTeamList();

  return (
    <Container>
      {(!myTeams || myTeams.length === 0) && <TeamEmpty />}

      {myTeams?.map(team => (
        <TeamCard team={team} />
      ))}
    </Container>
  );
};
