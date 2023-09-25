import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { pawShopApi } from '../services/config';
import cartModalReducer from './modals/cartForm/reducer';
import authModalReducer from './modals/authForm/reducer';

export const store = configureStore({
  reducer: {
    [pawShopApi.reducerPath]: pawShopApi.reducer,
    cartModal: cartModalReducer,
    authModal: authModalReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pawShopApi.middleware),
});

setupListeners(store.dispatch);
