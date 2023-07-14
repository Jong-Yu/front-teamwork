import { useMutation, useQuery } from 'react-query';
import { isValidToken, loginKakao, logout } from './api/AuthApi';
import { authQueryKeys } from './authQueryKeys';

export function useLoginKakao(code: string) {
  return useQuery(authQueryKeys.loginKakao(code), () => loginKakao(code), {
    enabled: code !== '',
  });
}

export function useLogout_Mutate() {
  return useMutation(() => logout());
}

export function useIsValid() {
  return useQuery(authQueryKeys.isValid, () => isValidToken());
}
