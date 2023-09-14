import React, { useState } from 'react';
import { Footer, Header } from '@components';
import AuthContainer from '@components/Modals/Auth/AuthContainer/AuthContainer';

const Layout = ({ children }) => {
  const [isOpenAuth, setIsOpenAuth] = useState(false);
  const handleAuth = () => {
    setIsOpenAuth(!isOpenAuth);
    console.log('toggle');
  };
  return (
    <div className="paw-shop">
      <Header handleAuth={handleAuth} />
      <main className="content">{children}</main>
      <Footer />
      <AuthContainer isOpenAuth={isOpenAuth} handleAuth={handleAuth} />
      <div className="black-background"></div>
    </div>
  );
};

export default Layout;
