import { createSlice } from '@reduxjs/toolkit';

const cartModalSlice = createSlice({
  name: 'cartModal',
  initialState: {
    isOpen: false,
  },
  reducers: {
    openCartModal: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { openCartModal } = cartModalSlice.actions;
export default cartModalSlice.reducer;
