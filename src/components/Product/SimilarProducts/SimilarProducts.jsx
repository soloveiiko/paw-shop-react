import React from 'react';
import ProductContainer from '@components/Base/ProductContainer/ProductContainer';
import { popularProducts } from '@utils/data';

const SimilarProducts = () => {
  return (
    <section className="similar-products">
      <div className="container similar-products__container">
        <h2 className="similar-products__headline headline">You can like this</h2>
        <ProductContainer products={popularProducts} />
      </div>
    </section>
  );
};

export default SimilarProducts;
