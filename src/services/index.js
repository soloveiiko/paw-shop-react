import axios from 'axios';

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://dropshop.demka.online/api/',
  headers: {
    'API-KEY': '',
    sHost: 'paw.shop',
  },
});
