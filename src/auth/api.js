import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_API_URL;

export function login(payload) {
  const { email, password } = payload;

  return axios({
    method: 'POST',
    url: `${baseUrl}/login`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    data: { email, password }
  })
}
