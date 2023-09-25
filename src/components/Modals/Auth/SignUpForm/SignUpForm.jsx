import React, { useEffect } from 'react';
import { Form, Formik } from 'formik';
import InputField from '@components/Modals/Auth/InputField/InputField';
import * as Yup from 'yup';
import { icoArrowAccent } from '@static';
import Cookies from 'js-cookie';
import { useRegisterUserMutation } from '../../../../services/authApi';
import Preloader from '@components/Base/Preloader/Preloader';
import { openAuthModal } from '../../../../redux/modals/modalsSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const SignUpForm = ({ setSignIn }) => {
  const navigate = useNavigate();
  const isOpenAuth = useSelector((state) => state.modals.authModal);
  const dispatch = useDispatch();
  const [registerUser, { isLoading, isSuccess, error, isError }] = useRegisterUserMutation();

  useEffect(() => {
    if (isSuccess) {
      navigate('/');
      dispatch(openAuthModal(!isOpenAuth));
    }
  }, [isLoading]);

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
  const onSubmitHandler = async (values, { resetForm }) => {
    const result = await registerUser(values);

    if (result.data) {
      Cookies.set('user', JSON.stringify(result), { expires: 1 });
      console.log('register values', result);
      resetForm({ values: { name: '', email: '', password: '', password_confirmation: '' } });
      return result;
    }
    return null;
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '', password_confirmation: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmitHandler}
    >
      {() => (
        <Form className="auth__form">
          {isLoading && <Preloader />}
          {isError && <div className="error">{error.data.message}</div>}
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
