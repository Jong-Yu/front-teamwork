import styled from '@emotion/styled';
import { TeamDto } from '../../../_query/team/model/TeamDto';
import { useTeamCard } from '../hooks/useTeamCard';

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

interface TeamCardProps {
  team: TeamDto;
}

export const TeamCard = ({ team }: TeamCardProps) => {
  // hooks
  const { onClickTeamCard } = useTeamCard();

  return (
    <Card onClick={() => onClickTeamCard(team.id)}>
      <LogoContainer>
        <TeamLogo src={team.logo} />
      </LogoContainer>
      <TeamInfoContainer>
        <TeamName>{team.name}</TeamName>
        {/* 나이별, 시간, 주요 장소에 대한 정보를 노출 (개발전) */}
      </TeamInfoContainer>
    </Card>
  );
};
