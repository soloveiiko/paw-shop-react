import React, { useEffect, useState } from 'react';
import ForPetLongButton from '@components/Base/Buttons/ForPetLongButton/ForPetLongButton';
import ProductContainer from '@components/Base/ProductContainer/ProductContainer';
import { useProductsQuery } from '@services/productApi';
import Preloader from '@components/Base/Preloader/Preloader';

const PopularProducts = () => {
  const [randomProducts, setRandomProducts] = useState([]);
  const { data, isLoading, isError } = useProductsQuery({
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
      ) : isLoading ? (
        <ProductContainer products={randomProducts} />
      ) : (
        <Preloader />
      )}
      <div className="popular-products__for-pets">
        <ForPetLongButton isCat={true} />
        <ForPetLongButton isDog={true} />
      </div>
    </section>
  );
};

export default PopularProducts;
