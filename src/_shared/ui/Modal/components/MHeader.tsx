import styled from '@emotion/styled';

const Header = styled.div({
  padding: '1rem 1.5rem',
});

const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const ExitButton = styled.span({
  position: 'relative',
  width: '32px',
  height: '32px',
  cursor: 'pointer',
  '&:after, &:before': {
    position: 'absolute',
    left: '15px',
    top: '5px',
    content: "''",
    height: '24px',
    width: '1px',
    backgroundColor: '#282B33',
    transform: 'rotate(-45deg)',
  },
  '&:before': {
    transform: 'rotate(45deg)',
  },
  '&:hover': {
    transform: 'opacity(0.3)',
  },
});

interface MHeaderProps {
  children?: React.ReactNode;
  onClose: () => void;
}

export const MHeader = ({ children, onClose }: MHeaderProps) => {
  return (
    <Header>
      <Container>{children}</Container>
      <ExitButton onClick={onClose} />
    </Header>
  );
};
