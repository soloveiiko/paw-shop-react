import { createSlice } from '@reduxjs/toolkit';

const authModalSlice = createSlice({
  name: 'authModal',
  initialState: {
    isOpen: false,
  },
  reducers: {
    openAuthModal: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { openAuthModal } = authModalSlice.actions;

export default authModalSlice.reducer;
