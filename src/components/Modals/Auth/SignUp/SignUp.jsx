import React from 'react';
import { Form, Formik } from 'formik';
import InputField from '@components/Modals/Auth/SignIn/InputField/InputField';
import * as Yup from 'yup';
import { icoArrowAccent } from '@static';

const SignUp = ({ setSignIn }) => {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Required').min(8, 'Too Short!').max(16, 'Too Long!'),
    email: Yup.string()
      .required('Required')
      .matches(/@[^.]*\./),
    password: Yup.string().required('Password is required!').min(8, 'Too Short!').max(16, 'Too Long!'),
    confirmPassword: Yup.string()
      .required('Required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  return (
    <Formik
      initialValues={{ fullName: '', email: '', password: '', confirmPassword: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm({ values: '' });
      }}
    >
      {() => (
        <Form className="sign-in__form">
          <div className="sign-in__container_left">
            <div className="sign-in__input-wrapper">
              <InputField className="sign-in" type="text" name="fullName" placeholder="Full name" />
            </div>
            <div className="sign-in__input-wrapper">
              <InputField className="sign-in" type="email" name="email" placeholder="Email" validateOnChange={true} />
            </div>
            <div className="sign-in__input-wrapper">
              <InputField className="sign-in" type="password" name="password" placeholder="Password" />
            </div>
            <div className="sign-in__input-wrapper">
              <InputField className="sign-in" type="password" name="confirmPassword" placeholder="Confirm Password" />
            </div>
          </div>
          <button className="sign-in__submit-btn" type="submit">
            Register
          </button>
          <button className="sign-in__registration-btn" type="button" onClick={() => setSignIn(true)}>
            <span className="sign-in__registration-btn-text">I have account</span>
            <img src={icoArrowAccent} alt="Sign in" />
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;
