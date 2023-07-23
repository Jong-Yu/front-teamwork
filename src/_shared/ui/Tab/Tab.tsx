import styled from '@emotion/styled';

const StyledTab = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  height: '30px',
  paddingLeft: '30px',
});

interface TabProps {
  children?: React.ReactNode;
}

export const Tab = ({ children }: TabProps) => {
  return <StyledTab>{children}</StyledTab>;
};
