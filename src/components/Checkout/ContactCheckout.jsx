import React from 'react';
import CountrySelect from '@components/Base/CountrySelect/CountrySelect';

const ContactCheckout = ({ handleTabClick }) => {
  return (
    <form className="contact-checkout">
      <div className="contact-checkout__details contact-checkout__item">
        <h3 className="contact-checkout__title">Your contact details</h3>
        <div className="contact-checkout__btn-container">
          <button className="contact-checkout__new-customer-btn">
            I’m a new customer
          </button>
          or
          <button className="contact-checkout__have-account-btn">
            I have an account
          </button>
        </div>
        <div className="contact-checkout__input-container">
          <label className="contact-checkout__label">
            E-mail or mobile phone number
            <input type="text" className="contact-checkout__input" />
          </label>
        </div>
      </div>
      <div className="contact-checkout__address contact-checkout__item">
        <h3 className="contact-checkout__title">Shipping address</h3>
        <div className="contact-checkout__input-container">
          <label className="contact-checkout__label">
            Country
            <CountrySelect />
          </label>
        </div>
        <div className="contact-checkout__inputs-container">
          <div className="contact-checkout__input-container">
            <label className="contact-checkout__label">
              Name
              <input
                type="text"
                className="contact-checkout__input"
                name="name"
              />
            </label>
          </div>
          <div className="contact-checkout__input-container">
            <label className="contact-checkout__label">
              Surname
              <input
                type="text"
                className="contact-checkout__input"
                name="surname"
              />
            </label>
          </div>
        </div>
        <div className="contact-checkout__input-container">
          <label className="contact-checkout__label">
            Address
            <input
              type="text"
              className="contact-checkout__input"
              name="address"
            />
          </label>
        </div>
        <div className="contact-checkout__inputs-container">
          <div className="contact-checkout__input-container">
            <label className="contact-checkout__label">
              City
              <input
                type="text"
                className="contact-checkout__input"
                name="city"
              />
            </label>
          </div>
          <div className="contact-checkout__input-container">
            <label className="contact-checkout__label">
              Zip code
              <input
                type="text"
                className="contact-checkout__input"
                name="zip-code"
              />
            </label>
          </div>
        </div>
        <div className="contact-checkout__input-container">
          <label className="contact-checkout__label">
            House, apartment number
            <input
              type="text"
              className="contact-checkout__input"
              name="house"
            />
          </label>
        </div>
      </div>
      <button
        className="contact-checkout__submit"
        type="submit"
        onClick={() => handleTabClick('shipping')}
      >
        Continue to shipping
      </button>
    </form>
  );
};

export default ContactCheckout;
