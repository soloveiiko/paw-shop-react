import React from 'react';

const ShippingCheckout = ({ handleTabClick }) => {
  return (
    <form className="shipping-checkout">
      <div className="shipping-checkout__choose-shipping shipping-checkout__item">
        <div className="shipping-checkout__input-container">
          <label className="shipping-checkout__label">
            <input
              className="shipping-checkout__input"
              type="radio"
              value="free"
              name="method"
            />
            <span className="shipping-checkout__label-title">
              Free US Shipping <span>Free</span>
            </span>
          </label>
        </div>
        <div className="shipping-checkout__input-container">
          <label className="shipping-checkout__label">
            <input
              className="shipping-checkout__input"
              type="radio"
              value="postal"
              name="method"
            />
            <span className="shipping-checkout__label-title">
              US Shipping (Priority Processing - Skip The Queue & Save 24 Hours)
              <span>Free</span>
            </span>
          </label>
        </div>
      </div>
      <button
        className="shipping-checkout__submit"
        type="submit"
        onClick={() => handleTabClick('payment')}
      >
        Continue to payment
      </button>
    </form>
  );
};

export default ShippingCheckout;
