import { getAxios } from '../../../_shared/util/Axios/axios.util';

export async function loginKakao(code: string) {
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

export async function logoutKakao() {
  const { post, axiosReturn } = getAxios();
  return post('/api/auth/logout').then(axiosReturn);
}
