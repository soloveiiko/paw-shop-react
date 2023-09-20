import React from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumbs, ProductBody, SimilarProducts, Switch } from '@components';

const ProductPage = () => {
  const { id } = useParams();
  const productId = id;

  return (
    <div className="page product-page">
      <Breadcrumbs />
      <ProductBody />
      <Switch />
      <SimilarProducts />
    </div>
  );
};

export default ProductPage;
