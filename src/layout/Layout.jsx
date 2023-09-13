import React, { useState } from 'react';
import { Footer, Header } from '@components';
import SignIn from '@components/Modals/Auth/SignIn/SignIn';

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
      <SignIn isOpenAuth={isOpenAuth} handleAuth={handleAuth} />
    </div>
  );
};

export default Layout;
