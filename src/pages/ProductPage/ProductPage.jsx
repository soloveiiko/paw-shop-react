import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumbs, ProductBody, SimilarProducts, Switch } from '@components';
import { useLazyProductItemQuery } from '../../services/productApi';
import Preloader from '@components/Base/Preloader/Preloader';

const ProductPage = () => {
  const { slug } = useParams();
  const [catalogItemGet, { data }] = useLazyProductItemQuery();
  console.log('randomProducts', data);
  useEffect(() => {
    catalogItemGet(slug);
  }, [data, slug]);
  if (!data || !data.data) {
    return <Preloader />;
  }
  return (
    <div className="page product-page">
      <Breadcrumbs name={catalogItemGet.name} />
      <ProductBody
        name={data.data.name}
        rating={data.data.product.rating}
        sku={data.data.sku}
        commentsCount={data.data.product.comments_count}
        images={data.data.images}
        colors={data.specifications.Color}
        genders={data.specifications.Gender}
        sizes={data.specifications.Size}
        currPrice={data.data.price}
        oldPrice={data.data.price_old}
        minQty={data.data.min_qty}
        discount={data.data.prices.discount}
      />
      <Switch
        description={data.data.product.body}
        commentsCount={data.data.product.comments_count}
        productId={data.data.product.id}
      />
      <SimilarProducts />
    </div>
  );
};

export default ProductPage;
