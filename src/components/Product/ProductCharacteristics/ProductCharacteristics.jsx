import React from 'react';
import { products } from '@utils/data';

const ProductCharacteristics = () => {
  const product = products[0];
  return (
    <div className="product-characteristics">
      <h2>Description</h2>
      {/*<div className="container product-characteristics__container">*/}
      {/*  <div className="product-characteristics__description">*/}
      {/*    <div className="product-characteristics__details">*/}
      {/*      <h2 className="product-characteristics__title">Details</h2>*/}
      {/*    </div>*/}
      {/*    <div className="product-characteristics__features">*/}
      {/*      <h2 className="product-characteristics__title">Features</h2>*/}
      {/*    </div>*/}
      {/*    <div className="product-characteristics__image">*/}
      {/*      <img src="" alt="Description" />*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="product-characteristics__specifications specifications">*/}
      {/*    <h2 className="specifications__title">Specifications</h2>*/}
      {/*    <div className="specifications__item">*/}
      {/*      <span className="product-characteristics__label">Type</span>*/}
      {/*      <span className="product-characteristics__value">{product.type}</span>*/}
      {/*    </div>*/}
      {/*    <div className="specifications__item">*/}
      {/*      <span className="product-characteristics__label">Animal</span>*/}
      {/*      <span className="product-characteristics__value">{product.animal}</span>*/}
      {/*    </div>*/}
      {/*    <div className="specifications__item">*/}
      {/*      <span className="product-characteristics__label">Material</span>*/}
      {/*      <span className="product-characteristics__value">{product.material}</span>*/}
      {/*    </div>*/}
      {/*    <div className="specifications__item">*/}
      {/*      <span className="product-characteristics__label">Size</span>*/}
      {/*      <span className="product-characteristics__value">{product.size}</span>*/}
      {/*    </div>*/}
      {/*    <div className="specifications__item">*/}
      {/*      <span className="product-characteristics__label">Color</span>*/}
      {/*      <span className="product-characteristics__value">{product.color}</span>*/}
      {/*    </div>*/}
      {/*    <div className="specifications__item">*/}
      {/*      <span className="product-characteristics__label">Country</span>*/}
      {/*      <span className="product-characteristics__value">{product.country}</span>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default ProductCharacteristics;
