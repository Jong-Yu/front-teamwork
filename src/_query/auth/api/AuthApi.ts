import axios from 'axios';

export async function loginKakao() {
  return axios.get('/api/auth/kakao').then(res => res.data);
}

export async function findTokenKakao(code: string) {
  return axios.post('/api/auth/token/kakao', { code }).then(res => res.data);
}
