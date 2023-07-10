import axios from 'axios';

export async function loginKakao(code: string) {
  return axios
    .post(
      '/api/auth/kakao',
      { code },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .then(res => res.data);
}

export async function logoutKakao() {
  const accessToken = localStorage.getItem('token');

  return axios
    .post('/api/auth/logout', { access_token: accessToken })
    .then(res => res.data);
}
