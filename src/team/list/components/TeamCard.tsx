import styled from '@emotion/styled';
import { TeamDto } from '../../../_query/team/model/TeamDto';

const Card = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  padding: '16px 0px',
  borderBottom: '1px solid #e6ecf1',
  cursor: 'pointer',
});

const LogoContainer = styled.div({
  width: ' 3.5rem',
  height: '3.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '1rem',
});

const TeamLogo = styled.img({
  width: '100%',
  height: '100%',
});

const TeamInfoContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const TeamName = styled.span({
  userSelect: 'none',
});

const TeamDesc = styled.span({
  userSelect: 'none',
});

interface TeamCardProps {
  team: TeamDto;
}

export const TeamCard = ({ team }: TeamCardProps) => {
  return (
    <Card>
      <LogoContainer>
        <TeamLogo src={team.logo} />
      </LogoContainer>
      <TeamInfoContainer>
        <TeamName>{team.name}</TeamName>
        <TeamDesc>{team.desc}</TeamDesc>
      </TeamInfoContainer>
    </Card>
  );
};
