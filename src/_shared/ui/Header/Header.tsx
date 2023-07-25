import styled from '@emotion/styled';
import portal from '../../util/Portal/portal.util';

interface HeaderContainerProps {
  children?: React.ReactNode;
}

const Container = styled.div({
  width: '100%',
  height: '60px',
  fontSize: '1.5rem',
  fontFamily: "'Kanit', sans-serif",
  position: 'sticky',
  top: 0,
  backgroundColor: 'white',

  [`@media (max-width: ${import.meta.env.VITE_MOBILE_WIDTH})`]: {
    fontSize: '1.4rem',
  },
});

const Contents = styled.div({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '1024px',
  margin: '0 auto',
  padding: '0 23px',
});

export const HeaderContainer = ({ children }: HeaderContainerProps) => {
  return (
    <>
      {portal(
        <Container>
          <Contents>{children}</Contents>
        </Container>,
        'header',
      )}
    </>
  );
};
