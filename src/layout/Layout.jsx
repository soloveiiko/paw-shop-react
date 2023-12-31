import React from 'react';
import { Footer, Header } from '@components';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { openAuthModal, openCartModal } from '@redux/modals/modalsSlice';
import AuthContainer from '@components/Modals/Auth/AuthContainer';
import Cart from '@components/Modals/Cart/Cart';

const Layout = () => {
  const isOpenAuth = useSelector((state) => state.modals.authModal);
  const isOpenCart = useSelector((state) => state.modals.cartModal);
  const isOpenSidebar = useSelector((state) => state.modals.sidebar);
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
      {isOpenAuth && (
        <AuthContainer isOpenAuth={isOpenAuth} handleAuth={handleAuth} />
      )}
      <Cart handleCart={handleCart} />
      {isOpenAuth || isOpenCart || isOpenSidebar ? (
        <div
          className={`overlayModal show${isOpenSidebar ? ' sidebar-open' : ''}`}
        ></div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Layout;
