import React from 'react';
import { useSelector } from 'react-redux';
import Image from '@components/Base/Image/Image';
import Preloader from '@components/Base/Preloader/Preloader';

const Order = () => {
  const cart = useSelector((state) => state.cart.cart);
  console.log('cart', cart);
  return (
    <>
      {cart && cart.data ? (
        <div className="order">
          <div className="order__title-wrapper">
            <h3 className="order__title">My order</h3>
            <div className="order__edit-cart">Edit cart</div>
          </div>
          <div className="order__items">
            {cart.data.purchases.map((purchase) => (
              <div key={purchase.id} className="order__item order-item">
                <div className="order-item__img-container">
                  <Image
                    src={purchase.variation.images[0].conversions.thumb.url}
                    alt={purchase.variation.name}
                    width="70"
                    height="70"
                  />
                  <span className="order-item__count">{purchase.quantity}</span>
                </div>
                <div className="order-item__name">
                  {purchase.variation.name}
                </div>
                <div className="order-item__total-price">
                  {purchase.total}
                  {purchase.variation.prices.currency.symbol}
                </div>
              </div>
            ))}
          </div>
          <form className="order__promocode promocode-form">
            <label htmlFor="" className="promocode-form__label">
              Promocode
            </label>
            <input
              type="text"
              className="promocode-form__input"
              name="promocode"
            />
            <button className="promocode-form__submit" type="submit">
              Apply
            </button>
          </form>
          <div className="order__general-list">
            <div className="order__general-item">
              <span className="order__general-title">Goods:</span>
              <span className="order__general-value">
                {cart.total.currency_code} {cart.total.purchases_all}
              </span>
            </div>
            <div className="order__general-item">
              <span className="order__general-title">Delivery:</span>
              <span className="order__general-value">
                {cart.total.currency_code} {cart.total.delivery_all}
              </span>
            </div>
            <div className="order__general-item">
              <span className="order__general-title">Discount:</span>
              <span className="order__general-value">
                {cart.total.currency_code} {cart.total.total_discount}
              </span>
            </div>
            <div className="order__general-price general-price">
              <span className="general-price__title">Order total:</span>
              <span className="general-price__value">
                {cart.total.currency_code} {cart.total.total}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default Order;
