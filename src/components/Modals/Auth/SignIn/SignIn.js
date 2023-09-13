import React, { useEffect } from 'react';
import ModalLayout from '@components/Modals/ModalLayout/ModalLayout';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const SignIn = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required!'),
    password: Yup.string().required('Password is required!').min(8).max(16),
  });
  useEffect(() => {
    if (email && password) {
      // setIsDisabled(false);
    }
  }, [email, password]);

  const onChangeEmail = (e) => {
    setEmail(e.target.value.toLowerCase());
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value.toLowerCase());
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = () => {
    console.log(email, password);
    setEmail('');
    setPassword('');
  };
  return (
    <div className="sign-in">
      <ModalLayout title="Sign in">
        <form className="sign-in__form" action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="sign-in__container_left">
            <div className="sign-in__input-wrapper">
              <input
                className="sign-in__input"
                type="email"
                value={email}
                placeholder="Email"
                {...register('email')}
                onChange={onChangeEmail}
              />
              <div className="sign-in__error">{errors.email?.message}</div>
            </div>
            <div className="sign-in__input-wrapper">
              <input
                className="sign-in__input"
                type="password"
                value={password}
                placeholder="Password"
                {...register('password')}
                onChange={onChangePassword}
              />
              <div className="sign-in__error">{errors.password?.message}</div>
            </div>
            <div className="sign-in__addition">
              <input className="sign-in__remember-me" type="checkbox" id="remember-me-checkbox" />
              <label className="sign-in__remember-me-title" htmlFor="remember-me-checkbox">
                Remember me
              </label>
              <button className="sign-in__reset-password">I forgot password</button>
            </div>
            <button type="sign-in__submit-btn">Sing in</button>
            <button type="sign-in__registration-btn">I’m a new customer</button>
          </div>
          <div className="sign-in__container_right social-auth">
            <h3 className="social-auth__title">Sign In With:</h3>
            <button className="social-auth__btn_google">
              <img className="social-auth__image" src="" alt="Google" />
              <span className="social-auth__text">Google</span>
            </button>
            <button className="social-auth__btn_facebook">
              <img className="social-auth__image" src="" alt="Facebook" />
              <span className="social-auth__text">Facebook</span>
            </button>
          </div>
        </form>
      </ModalLayout>
    </div>
  );
};

export default SignIn;
