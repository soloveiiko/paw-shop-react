import React, { useState } from 'react';
import ModalLayout from '@components/Modals/ModalLayout/ModalLayout';
import SignInForm from '@components/Modals/Auth/SignInForm/SignInForm';
import Social from '@components/Modals/Auth/Social/Social';
import SignUpForm from '@components/Modals/Auth/SignUpForm/SignUpForm';
import ResetPasswordForm from '@components/Modals/Auth/ResetPasswordForm/ResetPasswordForm';

const AuthContainer = ({ handleAuth }) => {
  const [isSignIn, setSignIn] = useState(true);
  const [isResetPassword, setResetPassword] = useState(false);
  return (
    <div className="auth-container">
      <ModalLayout
        handleAuth={handleAuth}
        title={isResetPassword ? 'Reset password' : isSignIn ? 'Sign in' : 'Register'}
      >
        {isResetPassword ? (
          <ResetPasswordForm setResetPassword={setResetPassword} />
        ) : isSignIn ? (
          <SignInForm setSignIn={setSignIn} setResetPassword={setResetPassword} />
        ) : (
          <SignUpForm setSignIn={setSignIn} />
        )}
        <Social />
      </ModalLayout>
    </div>
  );
};

export default AuthContainer;
