import styled from '@emotion/styled';

const Div = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Title = styled.span({
  fontSize: '1.2rem',
  fontWeight: 500,
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

interface HeaderProps {
  title: string;
  onClose: () => void;
}

export const Header = ({ title, onClose }: HeaderProps) => {
  return (
    <Div>
      <Title>{title}</Title>
      <ExitButton onClick={onClose} />
    </Div>
  );
};
