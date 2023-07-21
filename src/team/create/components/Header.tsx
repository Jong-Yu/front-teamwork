import styled from '@emotion/styled';
import { HeaderContainer } from '../../../_shared/ui/Header/Header';

const Div = styled.div({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const Span = styled.span({
  fontFamily: "'Kanit', sans-serif",
  fontSize: '1.2rem',
  fontWeight: 'bold',
  padding: '0 20px',
});

export const Header = () => {
  return (
    <HeaderContainer>
      <Div>
        <Span>팀 생성</Span>
      </Div>
    </HeaderContainer>
  );
};
