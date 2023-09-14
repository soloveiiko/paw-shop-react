import React from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import InputField from '@components/Modals/Auth/SignIn/InputField/InputField';

const SignIn = ({ setSignIn, setResetPassword }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Required')
      .matches(/@[^.]*\./, 'Not valid!'),
    password: Yup.string().required('Password is required!').min(8, 'Too Short!').max(16, 'Too Long!'),
  });

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
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
            <div className="sign-in__input-wrapper">
              <InputField className="sign-in" type="password" name="password" placeholder="Password" errors={errors} />
            </div>
          </div>
          <div className="sign-in__addition">
            <input className="sign-in__remember-me" type="checkbox" id="remember-me-checkbox" />
            <label className="sign-in__remember-me-title" htmlFor="remember-me-checkbox">
              Remember me
            </label>
            <button className="sign-in__reset-password" onClick={() => setResetPassword(true)}>
              I forgot password
            </button>
          </div>
          <button className="sign-in__submit-btn" type="submit">
            Sing in
          </button>
          <button className="sign-in__registration-btn" type="button" onClick={() => setSignIn(false)}>
            <span className="sign-in__registration-btn-text"> I’m a new customer</span>
            <img src="./../../../../static/images/icons/arrow-accent.svg" alt="Register" />
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignIn;
