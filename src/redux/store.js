import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authApi } from '../services/authApi';
import { productApi } from '../services/productApi';
import { reviewApi } from '../services/reviewApi';
import { subscribeApi } from '../services/subscribeApi';
import { userApi } from '../services/userApi';
import authSlice from './auth/authSlice';
import modalsSlice from './modals/modalsSlice';
import subscribeSlice from './subscribe/subscribeSlice';
import catalogSlice from './catalog/catalogSlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    [subscribeApi.reducerPath]: subscribeApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
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
      reviewApi.middleware,
    ]),
});

setupListeners(store.dispatch);
