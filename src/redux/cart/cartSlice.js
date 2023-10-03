import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartId: null,
  itemCount: 0,
  totalPrice: 0,
  cart: [],
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItems(state, action) {
      state.cart = action.payload;
    },
    setCartCount(state, action) {
      state.itemCount = action.payload;
    },
    setCartId(state, action) {
      state.cartId = action.payload;
    },
    setTotalPrice(state, action) {
      state.totalPrice = action.payload;
    },
  },
});
export const { setCartCount, setCartId, setTotalPrice, setCartItems } =
  cartSlice.actions;
export default cartSlice.reducer;
