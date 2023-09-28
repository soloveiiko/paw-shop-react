import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import { CatalogPage, HomePage, NotFoundPage, ProductPage } from '@pages';
import Layout from '../layout/Layout';

const PublicRoutes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Layout />}
        handle={{
          crumb: () => ({ name: 'Home', path: '/' }),
        }}
      >
        <Route index element={<HomePage />} />
        <Route
          path="catalog/:slug"
          element={<Outlet />}
          handle={{
            crumb: (data) => ({ name: 'Catalog', path: data?.path }),
          }}
        >
          <Route index element={<CatalogPage />} />
          <Route
            path="product/:productId"
            element={<ProductPage />}
            handle={{
              crumb: (data) => ({ name: data?.name, path: data?.path }),
            }}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default PublicRoutes;
