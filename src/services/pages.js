import { instance } from './index';

export const pagesAPI = {
  homePage(slug) {
    return instance.get(`pages/${slug}`);
  },
};
