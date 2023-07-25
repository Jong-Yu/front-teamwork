import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoginKakao } from '../../../_query/auth/authQuery';
import { useGoReplace } from '../../../_shared/hooks/History/History.hooks';

export function useLoginPage() {
  // hooks
  const code = new URLSearchParams(window.location.search)?.get('code') || '';
  const location = useLocation();
  const goReplace = useGoReplace();

  // query
  const { data: result } = useLoginKakao(code);

  useEffect(() => {
    if (result === 'success' && code) {
      const previousPage = location.state?.from;

      if (previousPage && previousPage !== '/login') {
        goReplace(previousPage);
      } else {
        goReplace('/team/list');
      }
    }
  }, [result, code, goReplace]);
}
