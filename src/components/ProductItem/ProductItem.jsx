import React from 'react';
import { icoBasket } from '@static';
import StarsRange from '@components/StarsRange/StarsRange';

const ProductItem = ({ product }) => {
  const perDifference = (prevPrice, currPrice) => {
    return Math.floor(((prevPrice - currPrice) * 100) / prevPrice);
  };
  return (
    <div className="popular-products__item products-item">
      <div className="products-item__additions">
        {product.isNew && <div className="products-item__new">New</div>}
        {product.discount.isDiscount && (
          <div className="products-item__discount">-{perDifference(product.price, product.discount.currPrice)}%</div>
        )}
      </div>
      <div className="products-item__img-container">
        <img className="products-item__image" width="100" height="100" src={product.image} alt="Product" />
      </div>
      <div className="products-item__information">
        <div className="products-item__name">{product.name}</div>
        <div className="products-item__stars-container stars-range">
          <StarsRange />
          <div className="products-item__reviews">{product.reviews}</div>
        </div>
        <div className="products-item__price-container">
          {product.discount.isDiscount ? (
            <div className="products-item__price-wrapper">
              <div className="products-item__curr-price">${product.discount.currPrice}</div>
              <div className="products-item__prev-price">${product.price}</div>
            </div>
          ) : (
            <div className="products-item__price">${product.price}</div>
          )}
          <div className="products-item__in-basket-container in-basket">
            <button className="in-basket__btn">
              +<img src={icoBasket} alt="In Basket" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
