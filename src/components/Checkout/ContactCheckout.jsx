import React, { useState } from 'react';
import CountrySelect from '@components/Base/CountrySelect/CountrySelect';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import InputField from '@components/Modals/Auth/InputField/InputField';
import { useCheckoutMutation } from '@services/checkoutApi';
import { setCheckoutData } from '@redux/checkout/checkoutSlice';
import { useDispatch } from 'react-redux';
const ContactCheckout = ({ handleTabClick }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [activeItem, setActiveItem] = useState('new-customer');
  const dispatch = useDispatch();
  const [{ isError, error }] = useCheckoutMutation();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Required')
      .matches(/@[^.]*\./, 'Not valid!'),
    firstname: Yup.string().required('Required'),
    lastname: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    zipcode: Yup.string().required('Required'),
    apartment: Yup.string().required('Required'),
  });

  const onSubmitHandler = async (values) => {
    // const result = await sendCheckout({
    //   email: values.email,
    //   shipping: {
    //     country: selectedCountry.value,
    //     firstname: values.firstname,
    //     lastname: values.lastname,
    //     address: values.address,
    //     city: values.city,
    //     zipcode: values.zipcode,
    //     apartment: values.apartment,
    //   },
    // });

    dispatch(
      setCheckoutData({
        email: values.email,
        shipping: {
          country: selectedCountry.value,
          firstname: values.firstname,
          lastname: values.lastname,
          address: values.address,
          city: values.city,
          zipcode: values.zipcode,
          apartment: values.apartment,
        },
      })
    );
    handleTabClick('shipping');
  };

  const isNewCustomerActive = activeItem === 'new-customer';
  const isHaveAccountActive = activeItem === 'have-account';

  return (
    <Formik
      initialValues={{
        email: '',
        country: '',
        firstname: '',
        lastname: '',
        address: '',
        city: '',
        zipcode: '',
        apartment: '',
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmitHandler}
    >
      {({ errors }) => (
        <Form className="contact-checkout">
          <div className="contact-checkout__details contact-checkout__item">
            <h3 className="contact-checkout__title">Your contact details</h3>
            <div className="contact-checkout__btn-container">
              <button
                className={`contact-checkout__customer-btn${
                  isNewCustomerActive ? ' active' : ''
                }`}
                type="button"
                onClick={() => setActiveItem('new-customer')}
              >
                I’m a new customer
              </button>
              or
              <button
                className={`contact-checkout__customer-btn${
                  isHaveAccountActive ? ' active' : ''
                }`}
                type="button"
                onClick={() => setActiveItem('have-account')}
              >
                I have an account
              </button>
            </div>
            {activeItem === 'new-customer' ? (
              <div className="contact-checkout__input-container">
                <label className="contact-checkout__label">
                  E-mail
                  <InputField
                    type="email"
                    name="email"
                    errors={errors}
                    isErrorFromServer={isError}
                    errorFromServer={error?.data.errors.email}
                    className="contact-checkout"
                  />
                </label>
              </div>
            ) : (
              ''
            )}
          </div>
          <div className="contact-checkout__address contact-checkout__item">
            <h3 className="contact-checkout__title">Shipping address</h3>
            <div className="contact-checkout__input-container">
              <label className="contact-checkout__label">
                Country
                <CountrySelect
                  selectedCountry={selectedCountry}
                  setSelectedCountry={setSelectedCountry}
                />
              </label>
            </div>
            <div className="contact-checkout__inputs-container">
              <div className="contact-checkout__input-container">
                <label className="contact-checkout__label">
                  Name
                  <InputField
                    type="text"
                    name="firstname"
                    errors={errors}
                    isErrorFromServer={isError}
                    errorFromServer={error?.data.errors.shipping}
                    className="contact-checkout"
                  />
                </label>
              </div>
              <div className="contact-checkout__input-container">
                <label className="contact-checkout__label">
                  Surname
                  <InputField
                    type="text"
                    name="lastname"
                    errors={errors}
                    isErrorFromServer={isError}
                    errorFromServer={error?.data.errors.shipping}
                    className="contact-checkout"
                  />
                </label>
              </div>
            </div>
            <div className="contact-checkout__input-container">
              <label className="contact-checkout__label">
                Address
                <InputField
                  type="text"
                  name="address"
                  errors={errors}
                  isErrorFromServer={isError}
                  errorFromServer={error?.data.errors.shipping}
                  className="contact-checkout"
                />
              </label>
            </div>
            <div className="contact-checkout__inputs-container">
              <div className="contact-checkout__input-container">
                <label className="contact-checkout__label">
                  City
                  <InputField
                    type="text"
                    name="city"
                    errors={errors}
                    isErrorFromServer={isError}
                    errorFromServer={error?.data.errors.shipping}
                    className="contact-checkout"
                  />
                </label>
              </div>
              <div className="contact-checkout__input-container">
                <label className="contact-checkout__label">
                  Zip code
                  <InputField
                    type="text"
                    name="zipcode"
                    errors={errors}
                    isErrorFromServer={isError}
                    errorFromServer={error?.data.errors.shipping}
                    className="contact-checkout"
                  />
                </label>
              </div>
            </div>
            <div className="contact-checkout__input-container">
              <label className="contact-checkout__label">
                House, apartment number
                <InputField
                  type="text"
                  name="apartment"
                  errors={errors}
                  isErrorFromServer={isError}
                  errorFromServer={error?.data.errors.shipping}
                  className="contact-checkout"
                />
              </label>
            </div>
          </div>
          <button
            className="contact-checkout__submit"
            type="submit"
            // onClick={() => handleTabClick('shipping')}
          >
            Continue to shipping
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactCheckout;
