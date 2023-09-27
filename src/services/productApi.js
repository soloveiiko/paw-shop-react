import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { baseQuery } from './configApi';

export const productApi = createApi({
  reducerPath: 'catalogApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    catalog: builder.query({
      query(data) {
        console.log('catalog data', data);
        return {
          url: `variations`,
          method: 'GET',
        };
      },
    }),
    products: builder.query({
      query(body) {
        console.log('popular product data', body);
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
