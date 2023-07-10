import { useQuery } from 'react-query';
import { loginKakao } from './api/AuthApi';
import { authQueryKeys } from './authQueryKeys';

export function useLoginKakao(code: string) {
  return useQuery(authQueryKeys.loginKakao(code), () => loginKakao(code), {
    enabled: code !== '',
  });
}
