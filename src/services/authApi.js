import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './configApi';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query(data) {
        console.log('register data', data);
        return {
          url: 'register',
          method: 'POST',
          body: data,
        };
      },
    }),
    loginUser: builder.mutation({
      query(data) {
        return {
          url: 'login',
          method: 'POST',
          body: data,
        };
      },
    }),
    verifyEmail: builder.mutation({
      query() {
        return {
          url: 'verify',
          method: 'GET',
        };
      },
    }),
    logoutUser: builder.mutation({
      query() {
        return {
          url: 'logout',
        };
      },
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation, useLogoutUserMutation, useVerifyEmailMutation } = authApi;
