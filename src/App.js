import React from 'react';
import { Footer, Header } from '@components';
import AppRoutes from '@routes/AppRoutes';
import './App.scss';

function App() {
  return (
    <div className="paw-shop">
      <Header />
      <div className="content">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
