import styled from '@emotion/styled';

const Contents = styled.div({
  padding: '1rem 1.5rem',
});

interface MContentsProps {
  children?: React.ReactNode;
}

export const MContents = ({ children }: MContentsProps) => {
  return <Contents>{children}</Contents>;
};
