import React from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import InputField from '@components/Modals/Auth/InputField/InputField';
import { icoArrowAccent } from '@static';

const SignInForm = ({ setSignIn, setResetPassword }) => {
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
        <Form className="auth__form">
          <div className="auth__container_left">
            <div className="auth__input-wrapper">
              <InputField className="auth" type="email" name="email" placeholder="Email" errors={errors} />
            </div>
            <div className="auth__input-wrapper">
              <InputField className="auth" type="password" name="password" placeholder="Password" errors={errors} />
            </div>
          </div>
          <div className="auth__addition">
            <input className="auth__remember-me" type="checkbox" id="remember-me-checkbox" />
            <label className="auth__remember-me-title" htmlFor="remember-me-checkbox">
              Remember me
            </label>
            <button className="auth__reset-password" onClick={() => setResetPassword(true)}>
              I forgot password
            </button>
          </div>
          <div className="auth__btn-container">
            <button className="auth__submit-btn" type="submit">
              Sing in
            </button>
            <button className="auth__registration-btn" type="button" onClick={() => setSignIn(false)}>
              <span className="auth__registration-btn-text"> I’m a new customer</span>
              <img className="auth__btn-image" src={icoArrowAccent} alt="Register" />
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
