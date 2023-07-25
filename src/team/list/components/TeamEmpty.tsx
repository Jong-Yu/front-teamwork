import styled from '@emotion/styled';
import { useTeamEmpty } from '../hooks/useTeamEmpty';

const Conatiner = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 'calc(100vh - 60px)',
});

const CreateButton = styled.button({
  border: 'none',
  backgroundColor: '#1570FF',
  borderRadius: '5px',
  width: '7rem',
  height: '2.5rem',
  color: '#fff',
  marginBottom: '20px',
  cursor: 'pointer',
});

const Span = styled.span({
  fontSize: '1.2rem',
  fontWeight: '500',
});

export const TeamEmpty = () => {
  // hooks
  const { onClickCreateButton } = useTeamEmpty();

  return (
    <Conatiner>
      <CreateButton onClick={onClickCreateButton}>팀 생성하기</CreateButton>
      <Span>소속된 팀이 없습니다.</Span>
    </Conatiner>
  );
};
