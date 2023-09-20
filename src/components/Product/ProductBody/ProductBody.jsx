import React, { useState } from 'react';
import { facebookBlue, icoReturn, telegramBlue, twitterBlue } from '@static';
import StarsRange from '@components/Base/StarsRange/StarsRange';
import { products } from '@utils/data';
import Amount from '@components/Base/Amount/Amount';

const ProductBody = () => {
  const product = products[0];
  const [quantity, setQuantity] = useState(product.quantity);
  const [totalPrice, setTotalPrice] = useState(product.price);

  return (
    <div className="product-body">
      <div className="product-body__container container">
        <div className="product-body__top">
          <h2>{product.name}</h2>
          <div className="product-body__stars-range">
            <StarsRange item={product} />
            <span className="product-body__stars-count">{product.reviews}</span>
          </div>
          <div className="product-body__scu">SKU: {product.scu}</div>
        </div>
        <div className="product-body__images">
          {product.images.map((img, index) => (
            <div key={index} className="product-body__img-container">
              <img src={img} alt="Product" />
            </div>
          ))}
        </div>
        <div className="product-body__description">
          <div className="product-body__size">
            Size:
            {product.sizes.map((size, index) => (
              <button key={index} className="product-body__size-item">
                {size}
              </button>
            ))}
          </div>
          <div className="product-body__color">
            Color:
            {product.colors.map((color, index) => (
              <button key={index} className="product-body__color-item">
                <img src={color} alt="Color" />
              </button>
            ))}
          </div>
          <div className="product-body__quantity">
            Quantity:
            <Amount product={product} quantity={quantity} setQuantity={setQuantity} setTotalPrice={setTotalPrice} />
          </div>
          <div className="product-body__buy">
            <div className="product-body__price-container">
              {product.discount.isDiscount ? (
                <>
                  <div className="product-body__prev-price">{product.price}$</div>
                  <div className="product-body__curr-price">{product.discount.price}$</div>
                </>
              ) : (
                <div className="product-body__price">{product.price}$</div>
              )}
            </div>
            <div className="product-body__btn-container">
              <button className="product-body__in-basket">Add to cart</button>
              <button className="product-body__buy-btn">Buy 1 click</button>
            </div>
          </div>
          <div className="product-body__return">
            <img className="product-body__return-img" src={icoReturn} alt="return" />
            <span className="product-body__return-text">Free return within 15 days</span>
          </div>
          <div className="product-body__share share">
            <div className="share__list">
              <div className="share__item">
                <img src={telegramBlue} alt="Telegram" />
              </div>
              <div className="share__item">
                <img src={facebookBlue} alt="Facebook" />
              </div>
              <div className="share__item">
                <img src={twitterBlue} alt="Twitter" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBody;
