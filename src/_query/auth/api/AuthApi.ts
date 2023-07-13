import { getAxios } from '../../../_shared/util/Axios/axios.util';

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

export async function logout(): Promise<void> {
  const { post, axiosReturn } = getAxios();
  return post('/api/auth/logout').then(axiosReturn);
}

export async function refresh(): Promise<string> {
  const { post, axiosReturn } = getAxios();
  return post('/api/auth/refresh').then(axiosReturn);
}
