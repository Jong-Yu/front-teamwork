export function isLogin() {
  return !!getAccessToken();
}

export function setAccessToken(accessToken: string) {
  localStorage.setItem('accessToken', accessToken);
}

export function getAccessToken() {
  return localStorage.getItem('accessToken') || '';
}
