import { OPEN_CART_MODAL } from './action';

const initialState = {
  isOpen: false,
};

const openCartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case OPEN_CART_MODAL:
      return {
        ...state,
        isOpen: payload,
      };
    default:
      return state;
  }
};

export default openCartReducer;
