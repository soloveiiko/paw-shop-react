import React from 'react';
import CountrySelect from '@components/Base/CountrySelect/CountrySelect';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import InputField from '@components/Modals/Auth/InputField/InputField';
import { useCheckoutMutation } from '@services/checkoutApi';

const ContactCheckout = ({ handleTabClick }) => {
  const [sendCheckout, { isLoading, isError, error, isSuccess }] =
    useCheckoutMutation();

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

  const onSubmitHandler = async (values, { resetForm }) => {
    const result = await sendCheckout({
      email: values.email,
      shipping: {
        firstname: values.firstname,
        lastname: values.lastname,
        address: values.address,
        city: values.city,
        zipcode: values.zipcode,
        apartment: values.apartment,
      },
    });
    if (result.data) {
      // resetForm({ values: { email: '', password: '' } });
      // dispatch(cartApi.util.invalidateTags(['Cart']));
      console.log('result.data', result.data);
    }
  };
  return (
    <Formik
      initialValues={{
        email: '',
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
              <button className="contact-checkout__customer-btn" type="button">
                I’m a new customer
              </button>
              or
              <button className="contact-checkout__customer-btn" type="button">
                I have an account
              </button>
            </div>
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
                  {/*<input*/}
                  {/*  type="text"*/}
                  {/*  className="contact-checkout__input"*/}
                  {/*  name="name"*/}
                  {/*/>*/}
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
                  {/*<input*/}
                  {/*  type="text"*/}
                  {/*  className="contact-checkout__input"*/}
                  {/*  name="surname"*/}
                  {/*/>*/}
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
                {/*<input*/}
                {/*  type="text"*/}
                {/*  className="contact-checkout__input"*/}
                {/*  name="address"*/}
                {/*/>*/}
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
                  {/*<input*/}
                  {/*  type="text"*/}
                  {/*  className="contact-checkout__input"*/}
                  {/*  name="city"*/}
                  {/*/>*/}
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
                  {/*<input*/}
                  {/*  type="text"*/}
                  {/*  className="contact-checkout__input"*/}
                  {/*  name="zip-code"*/}
                  {/*/>*/}
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
                {/*<input*/}
                {/*  type="text"*/}
                {/*  className="contact-checkout__input"*/}
                {/*  name="house"*/}
                {/*/>*/}
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
            onClick={() => handleTabClick('shipping')}
          >
            Continue to shipping
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactCheckout;
