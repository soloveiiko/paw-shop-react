import React from 'react';
import { Form, Formik } from 'formik';
import InputField from '@components/Modals/Auth/InputField/InputField';
import * as Yup from 'yup';
import { icoArrowAccent } from '@static';
import { useRegisterUserMutation } from '../../../../services/authApi';

const SignUpForm = ({ setSignIn }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required').min(8, 'Too Short!').max(16, 'Too Long!'),
    email: Yup.string()
      .required('Required')
      .matches(/@[^.]*\./),
    password: Yup.string().required('Password is required!').min(8, 'Too Short!').max(16, 'Too Long!'),
    password_confirmation: Yup.string()
      .required('Required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  const [registerUser, { isLoading, isSuccess, error, isError }] = useRegisterUserMutation();
  const onSubmitHandler = (values) => {
    registerUser(values);
    console.log('register values', values);
    debugger;
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '', password_confirmation: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmitHandler}
    >
      {() => (
        <Form className="auth__form">
          <div className="auth__container_left">
            <div className="auth__input-wrapper">
              <InputField className="auth" type="text" name="name" placeholder="Full name" />
            </div>
            <div className="auth__input-wrapper">
              <InputField className="auth" type="email" name="email" placeholder="Email" validateOnChange={true} />
            </div>
            <div className="auth__input-wrapper">
              <InputField className="auth" type="password" name="password" placeholder="Password" />
            </div>
            <div className="auth__input-wrapper">
              <InputField
                className="auth"
                type="password"
                name="password_confirmation"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <button className="auth__submit-btn" type="submit">
            Register
          </button>
          <button className="auth__registration-btn" type="button" onClick={() => setSignIn(true)}>
            <span className="auth__registration-btn-text">I have account</span>
            <img className="auth__btn-image" src={icoArrowAccent} alt="Sign in" />
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
