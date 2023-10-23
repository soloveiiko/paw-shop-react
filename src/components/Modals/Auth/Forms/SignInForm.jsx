import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginUserMutation } from '@services/authApi';
import { cartApi } from '@services/cartApi';
import { openAuthModal } from '@redux/modals/modalsSlice';
import { setUser } from '@redux/auth/authSlice';
import Preloader from '@components/Base/Preloader/Preloader';
import InputField from '@components/Modals/Auth/InputField';
import { ArrowAccent } from '@static/images/icons';

const SignInForm = ({ setSignIn, setResetPassword }) => {
  const navigate = useNavigate();
  const isOpenAuth = useSelector((state) => state.modals.authModal);
  const dispatch = useDispatch();
  const [loginUser, { isLoading, isError, error, isSuccess }] =
    useLoginUserMutation();

  useEffect(() => {
    if (isSuccess) {
      navigate('/');
      dispatch(openAuthModal(!isOpenAuth));
    }
  }, [isLoading]);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Required')
      .matches(/@[^.]*\./, 'Not valid!'),
    password: Yup.string()
      .required('Password is required!')
      .min(8, 'Too Short!')
      .max(16, 'Too Long!'),
  });
  const onSubmitHandler = async (values, { resetForm }) => {
    const result = await loginUser({
      email: values.email,
      password: values.password,
    });
    if (result.data) {
      dispatch(setUser(result.data.data));
      Cookies.set('access_token', result.data.data.access_token);
      resetForm({ values: { email: '', password: '' } });
      dispatch(cartApi.util.invalidateTags(['Cart']));
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmitHandler}
    >
      {({ errors }) => (
        <Form className="auth__form">
          {isLoading && <Preloader />}
          <div className="auth__container_left">
            <div className="auth__input-wrapper">
              <InputField
                className="auth"
                type="email"
                name="email"
                placeholder="Email"
                errors={errors}
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
                errors={errors}
              />
            </div>
          </div>
          <div className="auth__addition">
            <input
              className="auth__remember-me"
              type="checkbox"
              id="remember-me-checkbox"
            />
            <label
              className="auth__remember-me-title"
              htmlFor="remember-me-checkbox"
            >
              Remember me
            </label>
            <button
              className="auth__reset-password"
              onClick={() => setResetPassword(true)}
            >
              I forgot password
            </button>
          </div>
          <div className="auth__btn-container">
            <button className="auth__submit-btn" type="submit">
              Sing in
            </button>
            <button
              className="auth__registration-btn"
              type="button"
              onClick={() => setSignIn(false)}
            >
              <span className="auth__registration-btn-text">
                I’m a new customer
              </span>
              <ArrowAccent className="auth__btn-image" />
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
