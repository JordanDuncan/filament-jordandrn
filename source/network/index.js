import { api } from 'app/config/api';

export async function get() {
  let response = await api.get('/');
  return response;
}