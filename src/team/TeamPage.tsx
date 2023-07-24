import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

const Container = styled.div({
  backgroundColor: '#F8FAFB',
});

export const TeamPage = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};
