import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import { popularProducts } from '../../utils/data';
import ForPetLongButton from '../commons/ForPetLongButton/ForPetLongButton';

const PopularProducts = () => {
  return (
    <section className="main-page__popular-products popular-products">
      <h2 className="popular-products__headline headline">Popular products</h2>
      <div className="popular-products__list">
        {popularProducts.map((product) => (
          <ProductItem product={product} />
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
