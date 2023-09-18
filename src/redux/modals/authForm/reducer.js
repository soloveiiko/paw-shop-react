import { OPEN_AUTH_MODAL } from './action';

const initialState = {
  isOpen: false,
};

const openAuthReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case OPEN_AUTH_MODAL:
      return {
        ...state,
        isOpen: payload,
      };
    default:
      return state;
  }
};

export default openAuthReducer;
