import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Breadcrumbs, ProductBody, SimilarProducts, Switch } from '@components';
import { useLazyProductItemQuery } from '@services/productApi';
import Preloader from '@components/Base/Preloader/Preloader';

const ProductPage = () => {
  const { slug } = useParams();
  const [catalogItemGet, { data }] = useLazyProductItemQuery();
  const navigate = useNavigate();

  useEffect(() => {
    catalogItemGet(slug);
  }, [data, slug]);

  if (!data || !data.data) {
    return <Preloader />;
  }

  const selectedVariation = data.variations
    .filter((el) => el.slug === slug)
    .map((el) => el.id);
  // console.log('selectedVariation', selectedVariation);
  const handleChooseVariation = (el, item) => {
    const variation = data.switching
      .find((switchingEl) => switchingEl.attribute.id === el.attribute.id)
      .properties.find(
        (propertyEl) => propertyEl.property.id === item.property.id
      ).variation.slug;
    const crumbs = data.crumbs.map((el) => el.slug).join('/');
    const newPath = `/catalog/${crumbs}/product/${variation}`;
    navigate(newPath);
  };

  return (
    <div className="page product-page">
      <Breadcrumbs name={data.data.name} />
      <ProductBody
        data={data.data}
        switching={data.switching}
        selectedVariation={selectedVariation}
        handleChooseVariation={handleChooseVariation}
      />
      <Switch product={data.data} />
      <SimilarProducts />
    </div>
  );
};

export default ProductPage;
