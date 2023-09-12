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
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="border-2 w-40 mb-1.5"
            type="email"
            value={email}
            placeholder="Email"
            {...register('email')}
            onChange={onChangeEmail}
          />
          <div>{errors.email?.message}</div>
          <input
            className="border-2 w-40 mb-1.5"
            type="password"
            value={password}
            placeholder="Password"
            {...register('password')}
            onChange={onChangePassword}
          />
          <div>{errors.password?.message}</div>
          <button type="submit">Sing In</button>
        </form>
      </ModalLayout>
    </div>
  );
};

export default SignIn;
