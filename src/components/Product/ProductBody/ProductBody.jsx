import React, { useEffect, useState } from 'react';
import { facebookBlue, icoReturn, telegramBlue, twitterBlue } from '@static';
import Amount from '@components/Base/Amount/Amount';
import Image from '@components/Base/Image/Image';
import StarsRange from '@components/Base/StarsRange/StarsRange';
import { useAddToCartMutation } from '@services/cartApi';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setCartId } from '@redux/cart/cartSlice';

const ProductBody = ({
  data,
  switching,
  selectedVariation,
  handleChooseVariation,
}) => {
  const [quantity, setQuantity] = useState(data.min_qty);
  const [selectedProperties, setSelectedProperties] = useState({});
  const [addToCart] = useAddToCartMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    const initialProperties = {};
    switching.forEach((el) => {
      const selectedProperty = el.properties.find((item) => item.is_current);
      if (selectedProperty) {
        initialProperties[el.attribute.name] = {
          id: selectedProperty.property.id,
          value: selectedProperty.property.value,
        };
      }
    });
    setSelectedProperties(initialProperties);
  }, [switching]);

  const handleAddToCart = async (e) => {
    e.preventDefault();
    const result = await addToCart({
      data: {
        quantity: quantity,
      },
      id: selectedVariation,
    });

    if (result.data) {
      dispatch(setCartId(result.data.cart_id));
      Cookies.set('cart_id', result.data.cart_id);
      setQuantity(data.min_qty);
    }
  };
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <section className="product-body">
      <div className="container product-body__container">
        <div className="product-body__top">
          {data.name && <h2>{data.name}</h2>}
          <div className="product-body__stars-range">
            <StarsRange value={data.product.rating} />
            {data.product.comments_count && (
              <span className="product-body__stars-count">
                {data.product.comments_count}
              </span>
            )}
          </div>
          {data.sku && <div className="product-body__scu">SKU: {data.sku}</div>}
        </div>
        <div className="product-body__images">
          <swiper-container
            class="product-body__slider"
            slides-per-view="1"
            thumbs-swiper=".product-body__slider-trumbs"
            navigation="true"
          >
            {data.images.map((img) => (
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
            {data.images.map((img) => (
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
        <div className="product-body__checkbox-list">
          <div className="product-body__form">
            {switching.map((el) => (
              <div
                key={el.attribute.id}
                className="product-body__checkbox-item"
              >
                <span className="product-body__subtitle">
                  {el.attribute.name}:
                </span>
                {el.properties.map((item) => (
                  <button
                    key={item.property.id}
                    className={`product-body__checkbox-btn${
                      selectedProperties[el.attribute.name]?.id ===
                      item.property.id
                        ? ' selected'
                        : ''
                    }`}
                    type="button"
                    onClick={() => handleChooseVariation(el, item)}
                  >
                    {item.property.value}
                  </button>
                ))}
              </div>
            ))}
            <div className="product-body__quantity">
              <span className="product-body__subtitle">Quantity:</span>
              <Amount
                quantity={quantity}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              />
            </div>
            <div className="product-body__buy">
              <div className="product-body__price-container">
                {data.prices.discount === 1 ? (
                  <>
                    <div className="product-body__prev-price">
                      {data.price_old}$
                    </div>
                    <div className="product-body__curr-price">
                      {data.price}$
                    </div>
                  </>
                ) : (
                  <div className="product-body__price">{data.price}$</div>
                )}
              </div>
              <div className="product-body__btn-container">
                <button
                  className="product-body__in-basket"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
                <button className="product-body__buy-btn">Buy 1 click</button>
              </div>
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
