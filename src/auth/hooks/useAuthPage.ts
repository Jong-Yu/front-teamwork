export function useAuthPage() {
  // function
  const onClickLoginKakao = () => {
    window.location.href = '/api/auth/kakao'; // 서버로 카카오 로그인 요청
  };

  return {
    onClickLoginKakao,
  };
}
