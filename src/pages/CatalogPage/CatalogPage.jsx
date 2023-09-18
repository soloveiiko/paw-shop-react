import React from 'react';
import { Breadcrumbs, CategoryFilter, PetsFilter, ProductList, SortBy } from '@components';

const CatalogPage = () => {
  return (
    <div className="page catalog-page">
      <Breadcrumbs />
      <h2>Catalog</h2>
      <div className="catalog-page__filters">
        <div className="catalog-page__filters-container">
          <PetsFilter />
          <CategoryFilter />
          <SortBy />
        </div>
      </div>
      <div className="catalog-page__product-container container">
        <ProductList />
      </div>
    </div>
  );
};

export default CatalogPage;
