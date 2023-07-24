import styled from '@emotion/styled';

interface ButtonProps {
  primary?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>(props => ({
  border: 'none',
  borderRadius: '5px',
  padding: '0.5rem 1rem',
  fontSize: '1rem',
  fontWeight: 500,
  color: props.primary ? '#fff' : '#282B33',
  backgroundColor: props.primary ? '#1570FF' : '#F2F5F7',
  cursor: 'pointer',
  width: '100%',
  height: '2.5rem',
}));

export const Button = (props: ButtonProps) => {
  return <StyledButton {...props} />;
};
