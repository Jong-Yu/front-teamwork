import { getAxios } from '../../../_shared/util/Axios/axios.util';

/**
 *  토큰 만료 여부 확인
 */
export async function isValidToken(): Promise<boolean> {
  const { get, axiosReturn } = getAxios();
  return get('/api/auth/isvalid').then(axiosReturn);
}

/**
 * 카카오 로그인을 통해 웹 로그인
 */
export async function loginKakao(code: string): Promise<string> {
  const { post, axiosReturn } = getAxios();
  return post(
    '/api/auth/kakao',
    { code },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ).then(axiosReturn);
}

/**
 * 토큰 재발급
 */
export async function refresh(): Promise<string> {
  const { post, axiosReturn } = getAxios();
  return post('/api/auth/refresh').then(axiosReturn);
}

/**
 * 로그아웃
 */
export async function logout(): Promise<void> {
  const { post, axiosReturn } = getAxios();
  return post('/api/auth/logout').then(axiosReturn);
}
