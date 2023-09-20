import React from 'react';
import ProductReview from '@components/Product/ProductReview/ProductReview';
import ProductCharacteristics from '@components/Product/ProductCharacteristics/ProductCharacteristics';

const Switch = () => {
  return (
    <div className="switch">
      <ProductCharacteristics />
      <ProductReview />
    </div>
  );
};

export default Switch;
