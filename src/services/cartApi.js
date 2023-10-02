import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { baseQuery } from './configApi';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    cart: builder.query({
      query(data) {
        console.log('cart data', data);
        return {
          url: `carts`,
          method: 'GET',
          body: data,
        };
      },
    }),
    addToCart: builder.mutation({
      query({ data, id }) {
        console.log('cart data', data);
        return {
          url: `carts/${id}/add`,
          method: 'POST',
          body: data,
        };
      },
    }),
    removeFromCart: builder.mutation({
      query({ data, id }) {
        console.log('cart data', data);
        return {
          url: `carts/${id}/remove`,
          method: 'POST',
          body: data,
        };
      },
    }),
  }),
});
export const { useCartQuery, useAddToCartMutation, useRemoveFromCartMutation } =
  cartApi;
