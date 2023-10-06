import React from 'react';
import { setCheckoutData } from '@redux/checkout/checkoutSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const ShippingCheckout = ({ handleTabClick }) => {
  const checkoutData = useSelector((state) => state.checkout);
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    method: Yup.string().required('Please select a shipping method'),
  });
  const onSubmitHandler = async (values) => {
    const updatedCheckoutData = {
      ...checkoutData,
      shipping: {
        ...checkoutData.shipping,
        method: values.method,
      },
    };

    dispatch(setCheckoutData(updatedCheckoutData));
    handleTabClick('payment');
  };
  return (
    <Formik
      initialValues={{
        method: '',
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmitHandler}
    >
      {() => (
        <Form className="shipping-checkout">
          <div className="shipping-checkout__choose-shipping shipping-checkout__item">
            <div className="shipping-checkout__input-container">
              <label className="shipping-checkout__label">
                <Field
                  className="shipping-checkout__input"
                  type="radio"
                  name="method"
                  value="free"
                />
                <span className="shipping-checkout__label-title">
                  Free US Shipping <span>Free</span>
                </span>
              </label>
            </div>
            <div className="shipping-checkout__input-container">
              <label className="shipping-checkout__label">
                <Field
                  className="shipping-checkout__input"
                  type="radio"
                  name="method"
                  value="fast"
                />
                <span className="shipping-checkout__label-title">
                  US Shipping (Priority Processing - Skip The Queue & Save 24
                  Hours)
                  <span>Free</span>
                </span>
              </label>
            </div>
          </div>
          <ErrorMessage name="method" component="div" className="error" />
          <button className="shipping-checkout__submit" type="submit">
            Continue to payment
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ShippingCheckout;
