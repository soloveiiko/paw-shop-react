import React from 'react';
import { Link } from 'react-router-dom';

const PaymentCheckout = () => {
  return (
    <div className="payment-checkout">
      <div className="payment-checkout__payment payment-checkout__item">
        <h3 className="payment-checkout__title">Payment</h3>
        <div className="payment-checkout__input-container">
          <label className="payment-checkout__label">
            <input
              className="payment-checkout__input"
              type="radio"
              value="card"
              name="payment"
            />
            <span className="shipping-checkout__label-title">
              Credit or debit card
              <span>
                <img src="" alt="Visa" />
                <img src="" alt="MasterCard" />
              </span>
            </span>
          </label>
        </div>
        <div className="payment-checkout__input-container">
          <label className="payment-checkout__label">
            <input
              className="payment-checkout__input"
              type="radio"
              value="paypal"
              name="payment"
            />
            <span className="shipping-checkout__label-title">
              <img src="" alt="PayPal" />
            </span>
          </label>
        </div>
      </div>
      <div className="payment-checkout__address payment-checkout__item">
        <h3 className="payment-checkout__title">Billing address</h3>
        <div className="payment-checkout__input-container">
          <label className="payment-checkout__label">
            <input
              className="payment-checkout__input"
              type="radio"
              value="card"
              name="address"
            />
            <span className="shipping-checkout__label-title">
              Same as shipping address
            </span>
          </label>
        </div>
        <div className="payment-checkout__input-container">
          <label className="payment-checkout__label">
            <input
              className="payment-checkout__input"
              type="radio"
              value="paypal"
              name="address"
            />
            <span className="shipping-checkout__label-title">
              Use a different billing address
            </span>
          </label>
        </div>
      </div>
      <div className="payment-checkout__police">
        By clicking Pay now you agree with with
        <Link className="payment-checkout__link" to="#">
          {' '}
          Terms of Service{' '}
        </Link>
        and
        <Link className="payment-checkout__link" to="#">
          {' '}
          Privacy Policy
        </Link>
      </div>
      <button className="payment-checkout__submit" type="submit">
        Pay now
      </button>
    </div>
  );
};

export default PaymentCheckout;
