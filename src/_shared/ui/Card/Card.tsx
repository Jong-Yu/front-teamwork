import styled from '@emotion/styled';

const Container = styled.div({
  display: 'flex',
  padding: '15px 20px',
  backgroundColor: 'white',
  margin: '0 30px',
  borderRadius: '5px',
  boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
});

interface CardProps {
  children?: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return <Container>{children}</Container>;
};
