import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { setCheckoutData } from '@redux/checkout/checkoutSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useCheckoutMutation } from '@services/checkoutApi';
import Preloader from '@components/Base/Preloader/Preloader';

const PaymentCheckout = () => {
  const [paymentData, setPaymentData] = useState('');
  const [sendCheckout, { isLoading, isError, error, isSuccess }] =
    useCheckoutMutation();
  const checkoutData = useSelector((state) => state.checkout);
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    gateway: Yup.string().required('Please select a shipping method'),
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (paymentData) {
      sendApiRequest();
    }
  }, [paymentData]);

  useEffect(() => {
    if (isSuccess) {
      navigate('/');
    }
    if (isLoading) {
      return <Preloader />;
    }
  }, [isLoading]);

  const sendApiRequest = async () => {
    const updatedCheckoutData = {
      ...checkoutData,
      shipping: {
        ...checkoutData.shipping,
      },
      payment: {
        gateway: paymentData.gateway,
      },
    };

    dispatch(setCheckoutData(updatedCheckoutData));

    try {
      const result = await sendCheckout(updatedCheckoutData);

      console.log('checkoutData', updatedCheckoutData);
      console.log('result', result);
    } catch (error) {
      console.error('API error', error);
    }
  };
  const onSubmitHandler = (values) => {
    setPaymentData(values);
  };
  return (
    <Formik
      initialValues={{
        gateway: '',
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmitHandler}
    >
      {(errors) => (
        <Form className="payment-checkout">
          <div className="payment-checkout__payment payment-checkout__item">
            <h3 className="payment-checkout__title">Payment</h3>
            <div className="payment-checkout__input-container">
              <label className="payment-checkout__label">
                <Field
                  className="payment-checkout__input"
                  type="radio"
                  name="gateway"
                  value="fondy"
                />
                <span className="shipping-checkout__label-title">
                  Credit or debit card
                  <span>
                    <img src="" alt="Visa" />
                    <img src="" alt="MasterCard" />
                  </span>
                </span>
              </label>
            </div>
            <div className="payment-checkout__input-container">
              <label className="payment-checkout__label">
                <Field
                  className="payment-checkout__input"
                  type="radio"
                  name="gateway"
                  value="fondy"
                />
                <span className="shipping-checkout__label-title">
                  <img src="" alt="PayPal" />
                </span>
              </label>
            </div>
            {isError ? (
              <div className="error">{error}</div>
            ) : (
              errors && (
                <ErrorMessage
                  className="error"
                  component="div"
                  name="gateway"
                />
              )
            )}
          </div>
          {/*<div className="payment-checkout__address payment-checkout__item">*/}
          {/*  <h3 className="payment-checkout__title">Billing address</h3>*/}
          {/*  <div className="payment-checkout__input-container">*/}
          {/*    <label className="payment-checkout__label">*/}
          {/*      <Field*/}
          {/*        className="payment-checkout__input"*/}
          {/*        type="radio"*/}
          {/*        name="address"*/}
          {/*        value="card"*/}
          {/*      />*/}
          {/*      <span className="shipping-checkout__label-title">*/}
          {/*        Same as shipping address*/}
          {/*      </span>*/}
          {/*    </label>*/}
          {/*  </div>*/}
          {/*  <div className="payment-checkout__input-container">*/}
          {/*    <label className="payment-checkout__label">*/}
          {/*      <Field*/}
          {/*        className="payment-checkout__input"*/}
          {/*        type="radio"*/}
          {/*        name="address"*/}
          {/*        value="paypal"*/}
          {/*      />*/}
          {/*      <span className="shipping-checkout__label-title">*/}
          {/*        Use a different billing address*/}
          {/*      </span>*/}
          {/*    </label>*/}
          {/*  </div>*/}
          {/*  <ErrorMessage name="address" component="div" className="error" />*/}
          {/*</div>*/}
          <div className="payment-checkout__police">
            By clicking Pay now you agree with with
            <Link className="payment-checkout__link" to="#">
              {' '}
              Terms of Service{' '}
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
        </Form>
      )}
    </Formik>
  );
};

export default PaymentCheckout;
