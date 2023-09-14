import React, { useState } from 'react';
import ModalLayout from '@components/Modals/ModalLayout/ModalLayout';
import SignIn from '@components/Modals/Auth/SignIn/SignIn';
import Social from '@components/Modals/Auth/Social/Social';
import SignUp from '@components/Modals/Auth/SignUp/SignUp';
import ResetPassword from '@components/Modals/Auth/ResetPassword/ResetPassword';

const AuthContainer = ({ handleAuth }) => {
  const [isSignIn, setSignIn] = useState(true);
  const [isResetPassword, setResetPassword] = useState(false);
  return (
    <div className="auth-container">
      <ModalLayout handleAuth={handleAuth} title="Sign in">
        {isResetPassword ? (
          <ResetPassword />
        ) : isSignIn ? (
          <SignIn setSignIn={setSignIn} setResetPassword={setResetPassword} />
        ) : (
          <SignUp setSignIn={setSignIn} />
        )}
        <Social />
      </ModalLayout>
    </div>
  );
};

export default AuthContainer;
