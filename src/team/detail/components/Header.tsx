import styled from '@emotion/styled';
import { HeaderContainer } from '../../../_shared/ui/Header/Header';

const Span = styled.span({
  fontWeight: 'bold',
});

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Span>{title}</Span>
    </HeaderContainer>
  );
};
