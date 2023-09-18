import React from 'react';
import { popularProducts } from '@utils/data';
import ProductItem from '@components/ProductItem/ProductItem';

const ProductList = () => {
  return (
    <div className="product-list">
      <div className="product-list__wrapper">
        {popularProducts.map((product) => (
          <ProductItem product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
