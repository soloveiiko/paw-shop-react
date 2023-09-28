import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { baseQuery } from './configApi';

export const productApi = createApi({
  reducerPath: 'catalogApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    catalog: builder.query({
      query(slug) {
        console.log('catalog data', slug);
        return {
          url: `variations/${slug}`,
          method: 'GET',
        };
      },
    }),
    products: builder.query({
      query(body) {
        return {
          url: `variations`,
          method: 'GET',
          params: body,
        };
      },
    }),
  }),
});
export const { useCatalogQuery, useProductsQuery } = productApi;
