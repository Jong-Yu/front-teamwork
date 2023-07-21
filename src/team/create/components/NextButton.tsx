import styled from '@emotion/styled';

const Button = styled.button({
  border: 'none',
  borderRadius: '5px',
  padding: '0.5rem 1rem',
  fontSize: '1rem',
  fontWeight: 500,
  color: '#fff',
  backgroundColor: '#1570FF',
  cursor: 'pointer',
  width: '100%',
  height: '2.5rem',
});

export const NextButton = () => {
  return <Button>다음</Button>;
};
