import { Outlet } from 'react-router-dom';
import { Container } from '../_shared/ui/Container/Container';

export const AuthPage = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};
