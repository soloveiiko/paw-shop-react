import React from 'react';
import { icoBasket, icoUser } from '@static';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '@redux/auth/authSlice';
import { useLogoutUserMutation } from '@services/authApi';
import Cookies from 'js-cookie';
import { cartApi } from '@services/cartApi';
import { setCartCount, setCartId } from '@redux/cart/cartSlice';

const Tools = ({ toggleSidebar, handleAuth, handleCart }) => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [logoutUser] = useLogoutUserMutation();
  const onLogoutHandler = async () => {
    dispatch(setCartCount(0));
    dispatch(setCartId(null));
    Cookies.remove('cart_id');
    const result = await logoutUser();
    if (result.data) {
      Cookies.remove('access_token', {
        path: '/',
        secure: true,
      });
      dispatch(removeUser());
    }
    dispatch(cartApi.util.invalidateTags(['Cart']));
  };
  return (
    <div className="header__tools tools">
      <button className="tools__profile">
        {isAuth ? (
          <RiLogoutBoxRLine onClick={onLogoutHandler} />
        ) : (
          <img
            className="tools__profile-img"
            src={icoUser}
            width="26"
            height="26"
            loading="lazy"
            alt="Profile"
            onClick={handleAuth}
          />
        )}
      </button>
      <div className="tools__basket">
        <button className="tools__basket-img" onClick={handleCart}>
          <img
            className="tools__image"
            src={icoBasket}
            width="26"
            height="26"
            loading="lazy"
            alt="Basket"
          />
        </button>
        <div className="tools__basket-counter">{cart.itemCount}</div>
        <div className="tools__basket-price">${cart.totalPrice}</div>
      </div>
      <div className="tools__btn-container" onClick={toggleSidebar}>
        <button className="tools__open-sidebar-btn" title="Open"></button>
      </div>
    </div>
  );
};

export default Tools;
