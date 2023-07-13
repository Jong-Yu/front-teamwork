import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoginKakao } from '../../_query/auth/authQuery';
import { setAccessToken } from '../../_shared/util/Storage/localstorage';
import { useGoPush } from '../../_shared/hooks/History/History.hooks';

export function useAuthPage() {
  // var
  const code = new URLSearchParams(window.location.search)?.get('code') || '';

  // hooks
  const { data: token } = useLoginKakao(code);
  const location = useLocation();
  const goPush = useGoPush();

  // function
  const onClickLoginKakao = () => {
    // loginKakao();
    const clientId = import.meta.env.VITE_KAKAO_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_KAKAO_REDIRECT_URI;

    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
  };

  useEffect(() => {
    if (!!token && !!code) {
      setAccessToken(token);

      const previousPage = location.state?.from;

      console.log(previousPage);

      if (previousPage && previousPage !== '/login') {
        goPush(previousPage);
      } else {
        goPush('/main');
      }
    }
  }, [token]);

  return {
    onClickLoginKakao,
  };
}
