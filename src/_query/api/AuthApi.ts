import axios from 'axios';

export function loginKakao() {
  return axios.get('/api/auth/login/kakao').then(res => res.data);
}
