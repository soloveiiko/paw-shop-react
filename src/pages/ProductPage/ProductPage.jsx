import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumbs, ProductBody, SimilarProducts, Switch } from '@components';
import { useLazyProductItemQuery } from '@services/productApi';
import Preloader from '@components/Base/Preloader/Preloader';

const ProductPage = () => {
  const { slug } = useParams();
  const [catalogItemGet, { data }] = useLazyProductItemQuery();

  useEffect(() => {
    catalogItemGet(slug);
  }, [data, slug]);

  if (!data || !data.data) {
    return <Preloader />;
  }

  const selectedVariation = data.variations
    .filter((el) => el.slug === slug)
    .map((el) => el.id);

  return (
    <div className="page product-page">
      <Breadcrumbs name={data.data.name} />
      <ProductBody
        id={data.data.id}
        name={data.data.name}
        rating={data.data.product.rating}
        sku={data.data.sku}
        commentsCount={data.data.product.comments_count}
        images={data.data.images}
        currPrice={data.data.price}
        oldPrice={data.data.price_old}
        minQty={data.data.min_qty}
        discount={data.data.prices.discount}
        switching={data.switching}
        variation={selectedVariation}
      />
      <Switch product={data.data} />
      <SimilarProducts />
    </div>
  );
};

export default ProductPage;
