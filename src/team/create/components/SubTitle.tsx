import styled from '@emotion/styled';

const Span = styled.span({
  fontWeight: 700,
  fontSize: '2.2rem',
  lineHeight: '2.5rem',
  animation: `0.5s ease-in-out 0s 1 normal forwards running`,
});

interface SubTitleProps {
  subTitle: string;
}

export const SubTitle = ({ subTitle }: SubTitleProps) => {
  return <Span>{subTitle}</Span>;
};
