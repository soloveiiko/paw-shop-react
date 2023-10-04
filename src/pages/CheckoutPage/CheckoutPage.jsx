import React from 'react';
import {
  ContactCheckout,
  PaymentCheckout,
  ShippingCheckout,
} from '@components';

const CheckoutPage = () => {
  return (
    <div className="page checkout-page">
      <div className="container checkout-page__container">
        <ContactCheckout />
        <ShippingCheckout />
        <PaymentCheckout />
      </div>
    </div>
  );
};

export default CheckoutPage;
