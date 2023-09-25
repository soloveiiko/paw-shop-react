import { instance } from './index';

export const authAPI = {
  signIn() {
    return instance.post(`login`);
  },
  signUp() {
    return instance.post(`register`);
  },
  logout() {
    return instance.post(`logout`);
  },
};
