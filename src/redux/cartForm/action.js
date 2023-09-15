export const OPEN_CART_MODAL = 'OPEN_CART_MODAL';

export const openCartModal = (payload) => {
  return {
    type: OPEN_CART_MODAL,
    payload,
  };
};
