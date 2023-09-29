import React, { useState } from 'react';
import { facebookBlue, icoReturn, telegramBlue, twitterBlue } from '@static';
import Amount from '@components/Base/Amount/Amount';
import Image from '@components/Base/Image/Image';

const ProductBody = (props) => {
  const [totalPrice, setTotalPrice] = useState(props.currPrice);
  const [quantity, setQuantity] = useState(props.minQty);
  return (
    <section className="product-body">
      <div className="container product-body__container">
        <div className="product-body__top">
          {props.name && <h2>{props.name}</h2>}
          <div className="product-body__stars-range">
            {/*<StarsRange item={product} />*/}
            {props.commentsCount && (
              <span className="product-body__stars-count">
                {props.commentsCount}
              </span>
            )}
          </div>
          {props.sku && (
            <div className="product-body__scu">SKU: {props.sku}</div>
          )}
        </div>
        <div className="product-body__images">
          <swiper-container
            class="product-body__slider"
            slides-per-view="1"
            thumbs-swiper=".product-body__slider-trumbs"
            navigation="true"
          >
            {props.images.map((img) => (
              <swiper-slide key={img.id} className="product-body__slider-item">
                <Image
                  className="product-body__slider-img"
                  src={img.conversions.big.url}
                  alt="Product"
                  width="471"
                  height="471"
                />
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
            {props.images.map((img) => (
              <swiper-slide key={img.id} className="product-body__trumbs-item">
                <Image
                  className="product-body__trumbs-img"
                  src={img.conversions.thumb.url}
                  alt="Product"
                  width="83"
                  height="83"
                />
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
        <div className="product-body__description">
          {props.sizes && (
            <div className="product-body__size">
              <span className="product-body__subtitle">Size:</span>
              {props.sizes.map((size, index) => (
                <button key={index} className="product-body__size-item">
                  {size}
                </button>
              ))}
            </div>
          )}
          {props.colors && (
            <div className="product-body__color">
              <span className="product-body__subtitle">Color:</span>
              {props.colors.map((color, index) => (
                <button key={index} className="product-body__color-item">
                  {color}
                </button>
              ))}
            </div>
          )}
          {props.genders && (
            <div className="product-body__gender">
              <span className="product-body__subtitle">Gender:</span>
              {props.genders.map((gender, index) => (
                <button key={index} className="product-body__gender-item">
                  {gender}
                </button>
              ))}
            </div>
          )}
          <div className="product-body__quantity">
            <span className="product-body__subtitle">Quantity:</span>
            <Amount
              price={props.currPrice}
              quantity={quantity}
              setQuantity={setQuantity}
              setTotalPrice={setTotalPrice}
            />
          </div>
          <div className="product-body__buy">
            <div className="product-body__price-container">
              {props.discount === 1 ? (
                <>
                  <div className="product-body__prev-price">
                    {props.oldPrice}$
                  </div>
                  <div className="product-body__curr-price">
                    {props.currPrice}$
                  </div>
                </>
              ) : (
                <div className="product-body__price">{props.currPrice}$</div>
              )}
            </div>
            <div className="product-body__btn-container">
              <button className="product-body__in-basket">Add to cart</button>
              <button className="product-body__buy-btn">Buy 1 click</button>
            </div>
          </div>
          <div className="product-body__return">
            <img
              className="product-body__return-img"
              src={icoReturn}
              alt="return"
              width="30"
              height="30"
            />
            <span className="product-body__return-text">
              Free return within 15 days
            </span>
          </div>
          <div className="product-body__share share">
            <span className="share__subtitle">Share:</span>
            <div className="share__list">
              <div className="share__item_telegram">
                <img
                  className="share__image"
                  src={telegramBlue}
                  alt="Telegram"
                  width="18"
                  height="15"
                />
              </div>
              <div className="share__item_facebook">
                <img
                  className="share__image"
                  src={facebookBlue}
                  alt="Facebook"
                  width="10"
                  height="20"
                />
              </div>
              <div className="share__item_twitter">
                <img
                  className="share__image"
                  src={twitterBlue}
                  alt="Twitter"
                  width="20"
                  height="17"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBody;
