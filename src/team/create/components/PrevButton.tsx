import styled from '@emotion/styled';

const Button = styled.button({
  border: 'none',
  borderRadius: '5px',
  padding: '0.5rem 1rem',
  fontSize: '1rem',
  fontWeight: 500,
  color: '#282B33',
  backgroundColor: '#F2F5F7',
  cursor: 'pointer',
  width: '100%',
  height: '2.5rem',
});

interface PrevButtonProps {
  onClick: () => void;
}

export const PrevButton = ({ onClick }: PrevButtonProps) => {
  return <Button onClick={onClick}>이전</Button>;
};
