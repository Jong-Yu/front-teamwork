import { useMutation } from 'react-query';
import { loginKakao } from '../api/AuthApi';

export function useLoginKakao_Mutate() {
  return useMutation(() => loginKakao());
}
