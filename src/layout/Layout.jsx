import React from 'react';
import { Footer, Header } from '@components';

const Layout = ({ children }) => {
  return (
    <div className="paw-shop">
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
