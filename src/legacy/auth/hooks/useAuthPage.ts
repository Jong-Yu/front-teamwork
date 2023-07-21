import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoginKakao } from '../../../_query/auth/authQuery';
import { useGoReplace } from '../../_shared/hooks/History/History.hooks';

export function useAuthPage() {
  // var
  const code = new URLSearchParams(window.location.search)?.get('code') || '';

  // hooks
  const { data: token } = useLoginKakao(code);
  const location = useLocation();
  const goReplace = useGoReplace();

  // function
  const onClickLoginKakao = () => {
    const clientId = import.meta.env.VITE_KAKAO_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_KAKAO_REDIRECT_URI;

    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
  };

  useEffect(() => {
    if (!!token && !!code) {
      const previousPage = location.state?.from;

      if (previousPage && previousPage !== '/login') {
        goReplace(previousPage);
      } else {
        goReplace('/main');
      }
    }
  }, [token]);

  return {
    onClickLoginKakao,
  };
}
