import styled from '@emotion/styled';
import { TeamDto } from '../../../_query/team/model/TeamDto';
import { Card } from '../../../_shared/ui/Card/Card';

interface InfoProps {
  team?: TeamDto;
}

const Container = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
});

export const Info = ({ team }: InfoProps) => {
  return (
    <Container>
      <Card width="50%">{team?.desc}</Card>
      <Card width="30%">TODO : 팀 정보에 대한 수정</Card>
    </Container>
  );
};
