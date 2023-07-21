import styled from '@emotion/styled';
import { Title } from './components/Title';
import { SubTitle } from './components/SubTitle';
import { KakaoLogin } from './components/KakaoLogin';
import { useLoginPage } from './hooks/useLoginPage';

const Div = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
});

export const LoginPage = () => {
  // hooks
  useLoginPage();

  return (
    <Div>
      <Title />
      <SubTitle />
      <KakaoLogin />
    </Div>
  );
};
