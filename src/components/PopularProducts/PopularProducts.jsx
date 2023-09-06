import React from 'react';
import { popularProducts } from '@utils/data';
import ForPetLongButton from '@components/Buttons/ForPetLongButton/ForPetLongButton';
import ProductItem from '@components/ProductItem/ProductItem';

const PopularProducts = () => {
  return (
    <section className="main-page__popular-products popular-products">
      <h2 className="popular-products__headline headline">Popular products</h2>
      <div className="popular-products__list">
        {popularProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <div className="popular-products__for-pets">
        <ForPetLongButton isCat={true} />
        <ForPetLongButton isDog={true} />
      </div>
    </section>
  );
};

export default PopularProducts;
