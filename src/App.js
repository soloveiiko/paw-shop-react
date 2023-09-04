import { Footer, Header } from './components';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import React from 'react';

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
