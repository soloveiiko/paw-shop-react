import React from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumbs, ProductBody, SimilarProducts, Switch } from '@components';
import { products } from '@utils/data';

const ProductPage = () => {
  const { id } = useParams();
  const productId = id;
  const product = products.find((product) => product.id === productId);
  // const selectedCatalog = catalogList.find((catalog) => catalog.code === product.catalog);
  console.log(product, 'product');
  return (
    <div className="page product-page">
      <Breadcrumbs />
      <ProductBody product={product} />
      <Switch />
      <SimilarProducts />
    </div>
  );
};

export default ProductPage;
