import styled from '@emotion/styled';
import { TeamDto } from '../../../_query/team/model/TeamDto';

const Card = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '16px 0px',
  borderBottom: '1px solid #e6ecf1',
});

const TeamLogo = styled.img({});

const TeamInfoContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
});

const TeamName = styled.span({});

const TeamDesc = styled.span({});

interface TeamCardProps {
  team: TeamDto;
}

export const TeamCard = ({ team }: TeamCardProps) => {
  return (
    <Card>
      <TeamLogo src={team.logo} />
      <TeamInfoContainer>
        <TeamName>{team.name}</TeamName>
        <TeamDesc>{team.desc}</TeamDesc>
      </TeamInfoContainer>
    </Card>
  );
};
