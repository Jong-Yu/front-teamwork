import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

interface PrevProps extends HTMLAttributes<HTMLDivElement> {}

const Container = styled.div({
  width: '20px',
  height: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const ProvArrow = styled.div({
  width: '10px',
  height: '10px',
  borderBottom: '2px solid #b8bbc1',
  borderLeft: '2px solid #b8bbc1',
  transform: 'rotate(45deg)',
  cursor: 'pointer',
});

export const Prev = (props: PrevProps) => {
  return (
    <Container {...props}>
      <ProvArrow />
    </Container>
  );
};
