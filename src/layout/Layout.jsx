import React from 'react';
import { Footer, Header } from '@components';
import AuthContainer from '@components/Modals/Auth/AuthContainer/AuthContainer';
import { useDispatch, useSelector } from 'react-redux';
import Cart from '@components/Modals/Cart/Cart';
import { Outlet } from 'react-router-dom';
import { openAuthModal } from '../redux/modals/authForm/reducer';
import { openCartModal } from '../redux/modals/cartForm/reducer';

const Layout = () => {
  const isOpenAuth = useSelector((state) => state.authModal.isOpen);
  const isOpenCart = useSelector((state) => state.cartModal.isOpen);
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
      <main className="content">
        <Outlet />
      </main>
      <Footer />
      {isOpenAuth && <AuthContainer isOpenAuth={isOpenAuth} handleAuth={handleAuth} />}
      <Cart isOpenCart={isOpenCart} handleCart={handleCart} />
      <div className="black-background"></div>
    </div>
  );
};

export default Layout;
