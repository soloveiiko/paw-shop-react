import { createApi } from '@reduxjs/toolkit/query/react';
import { setUser } from '../redux/user/userSlice';
import { baseQuery } from './configApi';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getMe: builder.query({
      query() {
        return {
          url: 'my/profile',
          credentials: 'include',
        };
      },
      // transformResponse: (result: { data: { user: IUser } }) =>
      //     result.data.user,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {}
      },
    }),
  }),
});
