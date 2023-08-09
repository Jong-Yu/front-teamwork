import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

interface NextRrops extends HTMLAttributes<HTMLDivElement> {}

const Container = styled.div({
  width: '20px',
  height: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const NextArrow = styled.div({
  width: '10px',
  height: '10px',
  borderTop: '2px solid #b8bbc1',
  borderRight: '2px solid #b8bbc1',
  transform: 'rotate(45deg)',
  cursor: 'pointer',
  margin: 0,
  padding: 0,
});

export const Next = (props: NextRrops) => {
  return (
    <Container {...props}>
      <NextArrow />
    </Container>
  );
};
