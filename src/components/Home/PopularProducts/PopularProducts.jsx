import React from 'react';
import { popularProducts } from '@utils/data';
import ForPetLongButton from '@components/Base/Buttons/ForPetLongButton/ForPetLongButton';
import ProductContainer from '@components/Base/ProductContainer/ProductContainer';

const PopularProducts = () => {
  return (
    <section className="main-page__popular-products popular-products">
      <h2 className="popular-products__headline headline">Popular products</h2>
      <ProductContainer products={popularProducts} />
      <div className="popular-products__for-pets">
        <ForPetLongButton isCat={true} />
        <ForPetLongButton isDog={true} />
      </div>
    </section>
  );
};

export default PopularProducts;
