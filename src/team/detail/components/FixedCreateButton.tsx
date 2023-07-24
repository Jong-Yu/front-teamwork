import styled from '@emotion/styled';

const Button = styled.button({
  border: 'none',
  borderRadius: '5px',
  padding: '.5rem .5rem',
  fontSize: '1rem',
  fontWeight: 500,
  color: '#fff',
  backgroundColor: '#1570FF',
  cursor: 'pointer',
  width: '7rem',
  height: '3rem',
  position: 'fixed',
  bottom: '30px',
  right: '30px',
});

export const FixedCreateButton = () => {
  return <Button>일정 추가하기</Button>;
};
