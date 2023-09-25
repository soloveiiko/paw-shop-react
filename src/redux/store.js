import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { pawShopApi } from '../services/config';
import modalsReducer from './modals/modalsSlice';

export const store = configureStore({
  reducer: {
    [pawShopApi.reducerPath]: pawShopApi.reducer,
    modals: modalsReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pawShopApi.middleware),
});

setupListeners(store.dispatch);
