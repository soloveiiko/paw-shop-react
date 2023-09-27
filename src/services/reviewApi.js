import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { baseQuery } from './configApi';

export const reviewApi = createApi({
  reducerPath: 'reviewApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    review: builder.query({
      query(body) {
        console.log('review body', body);
        return {
          url: 'comments/products/random',
          method: 'GET',
          params: body,
        };
      },
    }),
  }),
});
export const { useReviewQuery } = reviewApi;
