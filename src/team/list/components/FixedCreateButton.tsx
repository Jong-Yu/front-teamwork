import styled from '@emotion/styled';
import { useFixedCreateButton } from '../hooks/useFixedCreateButton';

const Button = styled.button({
  border: 'none',
  borderRadius: '5px',
  padding: '.5rem .5rem',
  fontSize: '.7rem',
  fontWeight: 500,
  color: '#fff',
  backgroundColor: '#1570FF',
  cursor: 'pointer',
  width: '4.4rem',
  height: '1.8rem',
  position: 'fixed',
  bottom: '30px',
  right: '30px',
});

export const FixedCreateButton = () => {
  // hooks
  const { onClickCreateButton } = useFixedCreateButton();

  return <Button onClick={onClickCreateButton}>팀 생성하기</Button>;
};
