import React from 'react';
import { Link } from 'react-router-dom';

const PaymentCheckout = () => {
  return (
    <div className="payment-checkout">
      <div className="payment-checkout__payment payment-checkout__item">
        <h3 className="payment-checkout__title">Payment</h3>
        <div className="payment-checkout__input-container">
          <input
            className="payment-checkout__input"
            type="radio"
            value="card"
            name="payment"
          />
          <label className="payment-checkout__label" htmlFor="">
            <span>Credit or debit card</span>
            <span>
              <img src="" alt="Visa" />
              <img src="" alt="MasterCard" />
            </span>
          </label>
        </div>
        <div className="payment-checkout__input-container">
          <input
            className="payment-checkout__input"
            type="radio"
            value="paypal"
            name="payment"
          />
          <label className="payment-checkout__label" htmlFor="">
            <span>
              <img src="" alt="PayPal" />
            </span>
          </label>
        </div>
      </div>
      <div className="payment-checkout__address payment-checkout__item">
        <h3 className="payment-checkout__title">Billing address</h3>
        <div className="payment-checkout__input-container">
          <input
            className="payment-checkout__input"
            type="radio"
            value="card"
            name="address"
          />
          <label className="payment-checkout__label" htmlFor="">
            Same as shipping address
          </label>
        </div>
        <div className="payment-checkout__input-container">
          <input
            className="payment-checkout__input"
            type="radio"
            value="paypal"
            name="address"
          />
          <label className="payment-checkout__label" htmlFor="">
            Use a different billing address
          </label>
        </div>
      </div>
      <div className="payment-checkout__police">
        By clicking Pay now you agree with with
        <Link className="payment-checkout__link" to="#">
          {' '}
          Terms of Service
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
