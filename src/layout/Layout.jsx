import React from 'react';
import { Footer, Header } from '@components';
import AuthContainer from '@components/Modals/Auth/AuthContainer/AuthContainer';
import { useDispatch, useSelector } from 'react-redux';
import { openAuthModal } from '../redux/auth/action';
import { openCartModal } from '../redux/cart/action';
import Cart from '@components/Modals/Cart/Cart';

const Layout = ({ children }) => {
  const isOpenAuth = useSelector((state) => state.auth.isOpen);
  const isOpenCart = useSelector((state) => state.cart.isOpen);
  const dispatch = useDispatch();
  const handleAuth = () => {
    dispatch(openAuthModal(!isOpenAuth));
    console.log('toggle');
    console.log(isOpenAuth);
  };
  const handleCart = () => {
    dispatch(openCartModal(!isOpenCart));
    console.log('toggle');
    console.log(isOpenCart);
  };
  return (
    <div className="paw-shop">
      <Header handleAuth={handleAuth} handleCart={handleCart} />
      <main className="content">{children}</main>
      <Footer />
      {isOpenAuth && <AuthContainer isOpenAuth={isOpenAuth} handleAuth={handleAuth} />}
      {isOpenCart && <Cart handleCart={handleCart} />}
      <div className="black-background"></div>
    </div>
  );
};

export default Layout;
