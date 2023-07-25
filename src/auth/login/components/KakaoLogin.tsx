import styled from '@emotion/styled';

// styled
const A = styled.a({
  maxWidth: '22rem',
  width: '85%',
  cursor: 'pointer',
});
const Image = styled.img({
  width: '100%',
  height: '100%',
});

export const KakaoLogin = () => {
  const clientId = import.meta.env.VITE_KAKAO_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  return (
    <A
      href={`https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`}
    >
      <Image src="/icon/kakao_login_large_wide.png" alt="kakao_login_button" />
    </A>
  );
};
