import React, { useState } from 'react';
import {
  ContactCheckout,
  PaymentCheckout,
  ShippingCheckout,
} from '@components';
import Order from '@components/Checkout/Order';
import { MdDone } from 'react-icons/md';

const CheckoutContainer = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const isContactActive = activeTab === 'contact';
  const isShippingActive = activeTab === 'shipping';
  const isPaymentActive = activeTab === 'payment';
  return (
    <div className="checkout-container">
      <div className="checkout-container__steps">
        <span
          className={`checkout-container__step ${
            isContactActive ? 'active' : ''
          }${isShippingActive || isPaymentActive ? ' done' : ''}`}
        >
          {isShippingActive || isPaymentActive ? <MdDone /> : '1'}
        </span>
        <span
          className={`checkout-container__step ${
            isShippingActive ? 'active' : ''
          } ${isPaymentActive ? 'done' : ''}`}
        >
          {isPaymentActive ? <MdDone /> : '2'}
        </span>
        <span
          className={`checkout-container__step ${
            isPaymentActive ? 'active' : ''
          }`}
        >
          3
        </span>
      </div>
      <div className="checkout-container__forms">
        {activeTab === 'contact' && (
          <ContactCheckout handleTabClick={handleTabClick} />
        )}
        {activeTab === 'shipping' && (
          <ShippingCheckout handleTabClick={handleTabClick} />
        )}
        {activeTab === 'payment' && (
          <PaymentCheckout handleTabClick={handleTabClick} />
        )}
      </div>
      <Order />
    </div>
  );
};

export default CheckoutContainer;
