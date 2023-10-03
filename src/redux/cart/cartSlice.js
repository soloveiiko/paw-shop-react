import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartId: null,
  itemCount: null,
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartCount(state, action) {
      state.itemCount = action.payload;
    },
    setCartId(state, action) {
      state.cartId = action.payload;
    },
  },
});
export const { setCartCount, setCartId } = cartSlice.actions;
export default cartSlice.reducer;
