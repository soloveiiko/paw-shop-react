import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '@components/Base/Breadcrumbs/Breadcrumbs';

const ProductPage = () => {
  const { id } = useParams();
  const productId = id;

  return (
    <div>
      <Breadcrumbs />
      ProductPage
    </div>
  );
};

export default ProductPage;
