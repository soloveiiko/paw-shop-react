import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userApi } from '../services/userApi';
import { authApi } from '../services/authApi';
import authSlice from './auth/authSlice';
import modalsSlice from './modals/modalsSlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    modals: modalsSlice,
    auth: authSlice,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([authApi.middleware, userApi.middleware]),
});

setupListeners(store.dispatch);
