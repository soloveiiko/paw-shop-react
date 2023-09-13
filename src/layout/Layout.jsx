import React from 'react';
import { Footer, Header } from '@components';
import SignIn from '@components/Modals/Auth/SignIn/SignIn';

const Layout = ({ children }) => {
  return (
    <div className="paw-shop">
      <Header />
      <main className="content">{children}</main>
      <Footer />
      <SignIn />
    </div>
  );
};

export default Layout;
