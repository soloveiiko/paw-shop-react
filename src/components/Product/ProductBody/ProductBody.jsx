import React, { useState } from 'react';
import { facebookBlue, icoReturn, telegramBlue, twitterBlue } from '@static';
import StarsRange from '@components/Base/StarsRange/StarsRange';
import Amount from '@components/Base/Amount/Amount';
import Image from '@components/Base/Image/Image';

const ProductBody = ({ product }) => {
  const [totalPrice, setTotalPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);

  return (
    <div className="product-body">
      <div className="container product-body__container">
        <div className="product-body__top">
          <h2>{product.name}</h2>
          <div className="product-body__stars-range">
            <StarsRange item={product} />
            <span className="product-body__stars-count">{product.reviews}</span>
          </div>
          <div className="product-body__scu">SKU: {product.scu}</div>
        </div>
        <div className="product-body__images">
          <swiper-container class="product-body__slider" thumbs-swiper=".product-body__slider-trumbs">
            {product.images.map((img, index) => (
              <swiper-slide key={index} className="product-body__slider-item">
                <Image className="product-body__slider-img" src={img} alt="Product" width="471" height="471" />
              </swiper-slide>
            ))}
          </swiper-container>
          <swiper-container
            class="product-body__slider-trumbs"
            direction="vertical"
            slides-per-view="4"
            free-mode="true"
            watch-slides-progress="true"
          >
            {product.images.map((img, index) => (
              <swiper-slide key={index} className="product-body__trumbs-item">
                <Image className="product-body__trumbs-img" src={img} alt="Product" width="83" height="83" />
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
        <div className="product-body__description">
          <div className="product-body__size">
            <span className="product-body__subtitle">Size:</span>
            {product.sizes.map((size, index) => (
              <button key={index} className="product-body__size-item">
                {size}
              </button>
            ))}
          </div>
          <div className="product-body__color">
            <span className="product-body__subtitle">Color:</span>
            {product.colors.map((color, index) => (
              <button key={index} className="product-body__color-item">
                <img className="product-body__color-image" src={color} alt="Color" width="60" height="60" />
              </button>
            ))}
          </div>
          <div className="product-body__quantity">
            <span className="product-body__subtitle">Quantity:</span>
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
            <img className="product-body__return-img" src={icoReturn} alt="return" width="30" height="30" />
            <span className="product-body__return-text">Free return within 15 days</span>
          </div>
          <div className="product-body__share share">
            <span className="share__subtitle">Share:</span>
            <div className="share__list">
              <div className="share__item_telegram">
                <img className="share__image" src={telegramBlue} alt="Telegram" width="18" height="15" />
              </div>
              <div className="share__item_facebook">
                <img className="share__image" src={facebookBlue} alt="Facebook" width="10" height="20" />
              </div>
              <div className="share__item_twitter">
                <img className="share__image" src={twitterBlue} alt="Twitter" width="20" height="17" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBody;
