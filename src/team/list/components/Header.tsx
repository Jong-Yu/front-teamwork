import styled from '@emotion/styled';
import { HeaderContainer } from '../../../_shared/ui/Header/Header';

const Span = styled.span({
  fontWeight: 'bold',
});

export const Header = () => {
  return (
    <HeaderContainer>
      <Span>내 팀 목록</Span>
    </HeaderContainer>
  );
};
