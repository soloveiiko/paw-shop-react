import React, { useEffect } from 'react';
import { Form, Formik } from 'formik';
import InputField from '@components/Modals/Auth/InputField';
import * as Yup from 'yup';
import Cookies from 'js-cookie';
import { useRegisterUserMutation } from '@services/authApi';
import Preloader from '@components/Base/Preloader/Preloader';
import { openAuthModal } from '@redux/modals/modalsSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '@redux/auth/authSlice';
import { ArrowAccent } from '@static/images/icons';

const SignUpForm = ({ setSignIn }) => {
  const navigate = useNavigate();
  const isOpenAuth = useSelector((state) => state.modals.authModal);
  const dispatch = useDispatch();
  const [registerUser, { isLoading, isSuccess, error, isError }] =
    useRegisterUserMutation();

  useEffect(() => {
    if (isSuccess) {
      navigate('/');
      dispatch(openAuthModal(!isOpenAuth));
    }
  }, [isLoading]);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Required')
      .min(8, 'Too Short!')
      .max(16, 'Too Long!'),
    email: Yup.string()
      .required('Required')
      .matches(/@[^.]*\./),
    password: Yup.string()
      .required('Password is required!')
      .min(8, 'Too Short!')
      .max(16, 'Too Long!'),
    password_confirmation: Yup.string()
      .required('Required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });
  const onSubmitHandler = async (values, { resetForm }) => {
    const result = await registerUser(values);

    if (result.data) {
      dispatch(setUser(result.data.data));
      Cookies.set(
        'access_token',
        JSON.stringify(result.data.data.access_token)
      );
      resetForm({
        values: {
          name: '',
          email: '',
          password: '',
          password_confirmation: '',
        },
      });
      return result;
    }
    return null;
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmitHandler}
    >
      {() => (
        <Form className="auth__form">
          {isLoading && <Preloader />}
          <div className="auth__container_left">
            <div className="auth__input-wrapper">
              <InputField
                className="auth"
                type="text"
                name="name"
                placeholder="Full name"
                isErrorFromServer={isError}
                errorFromServer={error?.data.errors.name}
              />
            </div>
            <div className="auth__input-wrapper">
              <InputField
                className="auth"
                type="email"
                name="email"
                placeholder="Email"
                validateOnChange={true}
                isErrorFromServer={isError}
                errorFromServer={error?.data.errors.email}
              />
            </div>
            <div className="auth__input-wrapper">
              <InputField
                className="auth"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="auth__input-wrapper">
              <InputField
                className="auth"
                type="password"
                name="password_confirmation"
                placeholder="Confirm Password"
                isErrorFromServer={isError}
                errorFromServer={error?.data.errors.password}
              />
            </div>
          </div>
          <button className="auth__submit-btn" type="submit">
            Register
          </button>
          <button
            className="auth__registration-btn"
            type="button"
            onClick={() => setSignIn(true)}
          >
            <span className="auth__registration-btn-text">I have account</span>
            <ArrowAccent />
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
