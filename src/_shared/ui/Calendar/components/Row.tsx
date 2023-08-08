import styled from '@emotion/styled';

const StyledRow = styled.div({
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '0 20px',

  '.none': {
    display: 'none',
  },
});

interface RowProps {
  children: React.ReactNode;
}

export const Row = ({ children }: RowProps) => {
  return <StyledRow>{children}</StyledRow>;
};
