import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { baseQuery } from './configApi';

export const catalogApi = createApi({
  reducerPath: 'catalogApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    catalog: builder.query({
      query(data) {
        console.log('catalog data', data);
        return {
          url: `variations`,
          method: 'GET',
          body: data,
        };
      },
    }),
  }),
});
export const { useCatalogMutation } = catalogApi;
