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
  padding: '0 30px',
});

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Div>
        <Span>{title}</Span>
      </Div>
    </HeaderContainer>
  );
};
