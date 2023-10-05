import React from 'react';
import CheckoutContainer from '@components/Checkout/CheckoutContainer';

const CheckoutPage = () => {
  return (
    <div className="page checkout-page">
      <div className="container checkout-page__container">
        <CheckoutContainer />
      </div>
    </div>
  );
};

export default CheckoutPage;
