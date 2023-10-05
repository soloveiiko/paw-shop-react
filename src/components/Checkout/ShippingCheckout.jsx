import React from 'react';

const ShippingCheckout = ({ handleTabClick }) => {
  return (
    <form className="shipping-checkout">
      <div className="shipping-checkout__choose-shipping">
        <input type="radio" value="free" name="method" />
        <label htmlFor="">
          <span>Free US Shipping</span>
          <span>Free</span>
        </label>
        <input type="radio" value="postal" name="method" />
        <label htmlFor="">
          <span>
            US Shipping (Priority Processing - Skip The Queue & Save 24 Hours)
          </span>
          <span>Free</span>
        </label>
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
