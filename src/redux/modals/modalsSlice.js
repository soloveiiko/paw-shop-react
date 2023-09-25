import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authModal: false,
  cartModal: false,
};

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openAuthModal: (state, action) => {
      state.authModal = action.payload;
    },
    openCartModal: (state, action) => {
      state.cartModal = action.payload;
    },
  },
});

export const { openAuthModal, openCartModal } = modalsSlice.actions;

export default modalsSlice.reducer;
