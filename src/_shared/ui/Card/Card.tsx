import styled from '@emotion/styled';

interface CardProps {
  children?: React.ReactNode;
  width?: string;
}

const Container = styled.div(
  {
    padding: '15px 20px',
    backgroundColor: 'white',
    margin: '0 30px 15px 0px',
    borderRadius: '5px',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  },
  (props: { width?: string }) => ({
    width: props?.width || '100%',
  }),
);

export const Card = ({ children, width }: CardProps) => {
  return <Container width={width}>{children}</Container>;
};
