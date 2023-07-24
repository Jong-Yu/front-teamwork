import styled from '@emotion/styled';

const Container = styled.div({
  width: '100%',
  background: 'white',
});

const StyledTab = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  height: '30px',
  padding: '0 23px',
  maxWidth: '1024px',
  margin: '0 auto',
});

interface TabProps {
  children?: React.ReactNode;
}

export const Tab = ({ children }: TabProps) => {
  return (
    <Container>
      <StyledTab>{children}</StyledTab>
    </Container>
  );
};
