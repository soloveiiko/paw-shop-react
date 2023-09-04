import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage, NotFoundPage } from '../pages';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default PublicRoutes;
