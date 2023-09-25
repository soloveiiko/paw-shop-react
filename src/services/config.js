import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pawShopApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dropshop.demka.online/api/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pawShopApi;
