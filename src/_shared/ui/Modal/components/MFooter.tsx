import styled from '@emotion/styled';

const Footer = styled.div({
  padding: '1rem 1.5rem',
  position: 'relative',
  bottom: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});

interface MFooterProps {
  children?: React.ReactNode;
}

export const MFooter = ({ children }: MFooterProps) => {
  return <Footer>{children}</Footer>;
};
