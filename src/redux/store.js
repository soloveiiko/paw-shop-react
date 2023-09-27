import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userApi } from '../services/userApi';
import { authApi } from '../services/authApi';
import { subscribeApi } from '../services/subscribeApi';
import { productApi } from '../services/productApi';
import authSlice from './auth/authSlice';
import modalsSlice from './modals/modalsSlice';
import subscribeSlice from './subscribe/subscribeSlice';
import catalogSlice from './catalog/catalogSlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [subscribeApi.reducerPath]: subscribeApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    modals: modalsSlice,
    auth: authSlice,
    subscribe: subscribeSlice,
    catalog: catalogSlice,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      userApi.middleware,
      subscribeApi.middleware,
      productApi.middleware,
    ]),
});

setupListeners(store.dispatch);
