import axios from 'axios';

export const API_CONFIG = axios.create({
  baseURL: 'https://user-s-server.vercel.app',
  withCredentials: true,
});
