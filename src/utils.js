export function clearToken() {
  window.localStorage.removeItem('token');
}
export function saveToken(token) {
  window.localStorage.setItem('token', token);
}
export function getToken() {
  return window.localStorage.getItem('token');
}
