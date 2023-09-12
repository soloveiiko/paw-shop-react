import React from 'react';
import AppRoutes from '@routes/AppRoutes';
import './App.scss';
import Layout from './layout/Layout';

function App() {
  return (
    <>
      <Layout>
        <AppRoutes />
      </Layout>
    </>
  );
}

export default App;
