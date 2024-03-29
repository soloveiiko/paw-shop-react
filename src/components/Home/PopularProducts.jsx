import React, { useEffect, useState } from 'react';
import ForPetLongButton from '@components/Base/Buttons/ForPetLongButton';
import ProductContainer from '@components/Base/ProductContainer/ProductContainer';
import { useProductsQuery } from '@services/productApi';

const PopularProducts = () => {
  const [randomProducts, setRandomProducts] = useState([]);
  const { data, isError } = useProductsQuery({
    per_page: 4,
    sort: 'random',
  });
  useEffect(() => {
    if (data) {
      setRandomProducts(data.data);
    }
  }, [data]);

  return (
    <section className="main-page__popular-products popular-products">
      <h2 className="popular-products__headline headline">Popular products</h2>
      {isError ? (
        <div className="not-found-message">Not found popular product</div>
      ) : (
        <ProductContainer products={randomProducts} />
      )}
      <div className="popular-products__for-pets">
        <ForPetLongButton isCat={true} />
        <ForPetLongButton isDog={true} />
      </div>
    </section>
  );
};

export default PopularProducts;
