import styled from '@emotion/styled';
import { useScheduleEmpty } from '../create/hooks/useScheduleEmpty';

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

export const ScheduleEmpty = () => {
  // hooks
  const { onClickCreateButton } = useScheduleEmpty();

  return (
    <Conatiner>
      <CreateButton onClick={onClickCreateButton}>일정 추가하기</CreateButton>
      <Span>등록된 일정이 없습니다.</Span>
    </Conatiner>
  );
};
