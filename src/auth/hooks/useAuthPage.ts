export function useAuthPage() {
  // function
  const onClickLoginKakao = () => {
    const clientId = import.meta.env.VITE_KAKAO_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_KAKAO_REDIRECT_URI;
    const scope = 'account_email birthday';

    window.location.assign(
      `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`,
    );
  };

  return {
    onClickLoginKakao,
  };
}
