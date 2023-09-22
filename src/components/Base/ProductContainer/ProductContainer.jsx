import React from 'react';
import ProductItem from '@components/ProductItem/ProductItem';

const ProductContainer = ({ products }) => {
  const lastFourProducts = products.slice(-4);
  return (
    <div className="products-container">
      {lastFourProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductContainer;
