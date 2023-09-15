import React from 'react';
import { Footer, Header } from '@components';
import AuthContainer from '@components/Modals/Auth/AuthContainer/AuthContainer';
import { useDispatch, useSelector } from 'react-redux';
import { openAuthModal } from '../redux/authForm/action';
import { openCartModal } from '../redux/cartForm/action';
import Cart from '@components/Modals/Cart/Cart';

const Layout = ({ children }) => {
  const isOpenAuth = useSelector((state) => state.auth.isOpen);
  const isOpenCart = useSelector((state) => state.cart.isOpen);
  const dispatch = useDispatch();
  const handleAuth = () => {
    dispatch(openAuthModal(!isOpenAuth));
  };
  const handleCart = () => {
    dispatch(openCartModal(!isOpenCart));
  };
  return (
    <div className="paw-shop">
      <Header handleAuth={handleAuth} handleCart={handleCart} />
      <main className="content">{children}</main>
      <Footer />
      {isOpenAuth && <AuthContainer isOpenAuth={isOpenAuth} handleAuth={handleAuth} />}
      <Cart isOpenCart={isOpenCart} handleCart={handleCart} />
      <div className="black-background"></div>
    </div>
  );
};

export default Layout;
