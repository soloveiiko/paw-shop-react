import React from 'react';
import { Footer, Header } from '@components';
import AuthContainer from '@components/Modals/Auth/AuthContainer/AuthContainer';
import { useDispatch, useSelector } from 'react-redux';
import { openAuthModal } from '../redux/auth/action';

const Layout = ({ children }) => {
  const isOpenAuth = useSelector((state) => state.auth.isOpen);
  const dispatch = useDispatch();
  const handleAuth = () => {
    dispatch(openAuthModal(!isOpenAuth));
    console.log('toggle');
    console.log(isOpenAuth);
  };
  return (
    <div className="paw-shop">
      <Header handleAuth={handleAuth} />
      <main className="content">{children}</main>
      <Footer />
      {isOpenAuth && <AuthContainer isOpenAuth={isOpenAuth} handleAuth={handleAuth} />}
      <div className="black-background"></div>
    </div>
  );
};

export default Layout;
