import React from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import InputField from '@components/Modals/Auth/SignIn/InputField/InputField';
import { icoArrowAccent } from '@static';

const ResetPassword = ({ setResetPassword }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Required')
      .matches(/@[^.]*\./, 'Not valid!'),
  });
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm({ values: '' });
      }}
    >
      {({ errors }) => (
        <Form className="sign-in__form">
          <div className="sign-in__container_left">
            <div className="sign-in__input-wrapper">
              <InputField className="sign-in" type="email" name="email" placeholder="Email" errors={errors} />
            </div>
          </div>
          <button className="sign-in__submit-btn" type="submit">
            Reset
          </button>
          <button className="sign-in__registration-btn" type="button" onClick={() => setResetPassword(false)}>
            <span className="sign-in__registration-btn-text">I remember password</span>
            <img src={icoArrowAccent} alt="Back" />
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ResetPassword;
