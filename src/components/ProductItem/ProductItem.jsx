import React from 'react';
import { icoBasket } from '@static';
import StarsRange from '@components/Base/StarsRange/StarsRange';
import Image from '@components/Base/Image/Image';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  const perDifference = (prevPrice, currPrice) => {
    return Math.floor(((prevPrice - currPrice) * 100) / prevPrice);
  };
  return (
    <div className="products-item">
      <div className="products-item__additions">
        {product.isNew && <div className="products-item__new">New</div>}
        {product.discount.isDiscount && (
          <div className="products-item__discount">-{perDifference(product.price, product.discount.currPrice)}%</div>
        )}
      </div>
      <Link to="/catalog/product/1">
        <div className="products-item__img-container">
          <Image
            className="products-item__image"
            width="300"
            height="194"
            src={product.image}
            loading="lazy"
            alt="Product"
          />
        </div>
      </Link>
      <div className="products-item__information">
        <Link to="/catalog/product/1" className="products-item__name">
          {product.name}
        </Link>
        <div className="products-item__stars-container stars-range">
          <StarsRange item={product.stars} />
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
              +<img src={icoBasket} width="20" height="20" loading="lazy" alt="In Basket" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
