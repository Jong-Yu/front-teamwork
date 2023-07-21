import styled from '@emotion/styled';

const Header = styled.div({
  padding: '1rem 1.5rem',
});

interface MHeaderProps {
  children?: React.ReactNode;
}

export const MHeader = ({ children }: MHeaderProps) => {
  return <Header>{children}</Header>;
};
