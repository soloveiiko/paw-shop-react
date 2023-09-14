export const OPEN_AUTH_MODAL = 'OPEN_AUTH_MODAL';

export const openAuthModal = (payload) => {
  return {
    type: OPEN_AUTH_MODAL,
    payload,
  };
};
