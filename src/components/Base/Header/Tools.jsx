import React from 'react';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '@redux/auth/authSlice';
import { useLogoutUserMutation } from '@services/authApi';
import Cookies from 'js-cookie';
import { cartApi } from '@services/cartApi';
import { cleanCart } from '@redux/cart/cartSlice';
import { Basket, User } from '@static/images/icons';

const Tools = ({ toggleSidebar, handleAuth, handleCart }) => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [logoutUser] = useLogoutUserMutation();
  const onLogoutHandler = async () => {
    dispatch(cleanCart());
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
          <User onClick={handleAuth} />
        )}
      </button>
      <div className="tools__basket">
        <button className="tools__basket-img" onClick={handleCart}>
          <Basket className="tools__image" />
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
