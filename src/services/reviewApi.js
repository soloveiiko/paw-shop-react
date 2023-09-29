import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { baseQuery } from './configApi';

export const reviewApi = createApi({
  reducerPath: 'reviewApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    reviews: builder.query({
      query(body) {
        console.log('review body', body);
        return {
          url: 'comments/products/random',
          method: 'GET',
          params: body,
        };
      },
    }),
    productReviews: builder.query({
      query(id, body) {
        return {
          url: `comments/products/${id}`,
          method: 'GET',
          params: body,
        };
      },
    }),
    addReviews: builder.mutation({
      query(id, reviewData) {
        return {
          url: `comments/products/${id}`,
          method: 'POST',
          body: reviewData,
        };
      },
    }),
  }),
});
export const {
  useReviewsQuery,
  useLazyProductReviewsQuery,
  useAddReviewsMutation,
} = reviewApi;
