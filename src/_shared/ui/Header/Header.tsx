import styled from '@emotion/styled';

interface HeaderContainerProps {
  children?: React.ReactNode;
}

const Div = styled.div({
  width: '100%',
  height: '60px',
});

export const HeaderContainer = ({ children }: HeaderContainerProps) => {
  return <Div>{children}</Div>;
};
