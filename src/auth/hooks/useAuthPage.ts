import { useEffect } from 'react';
import { logoutKakao } from '../../_query/auth/api/AuthApi';
import { useLoginKakao } from '../../_query/auth/authQuery';
import { setAccessToken } from '../../_shared/util/storage/localstorage';

export function useAuthPage() {
  // var
  const code = new URLSearchParams(window.location.search)?.get('code') || '';

  // hooks
  const { data: token } = useLoginKakao(code);

  // function
  const onClickLoginKakao = () => {
    // loginKakao();
    const clientId = import.meta.env.VITE_KAKAO_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_KAKAO_REDIRECT_URI;

    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
  };

  const onClickLogOut = () => {
    logoutKakao();
  };

  useEffect(() => {
    if (!!token && !!code) {
      console.log(token);
      setAccessToken(token);
      window.location.href = 'login';
    }
  }, [token]);

  return {
    onClickLoginKakao,
    onClickLogOut,
  };
}
