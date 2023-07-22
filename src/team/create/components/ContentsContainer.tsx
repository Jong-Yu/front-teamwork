import styled from '@emotion/styled';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
});

interface ContentsContainerProps {
  children?: React.ReactNode;
}

export const ContentsContainer = ({ children }: ContentsContainerProps) => {
  return <Container>{children}</Container>;
};
