import React from 'react';
import { Facebook, Google } from '@static/images/icons';

const Social = () => {
  return (
    <div className="sign-in__container_right social-auth">
      <h3 className="social-auth__title">Sign In With:</h3>
      <button className="social-auth__btn_google">
        <Google className="social-auth__image" />
        <span className="social-auth__text">Google</span>
      </button>
      <button className="social-auth__btn_facebook">
        <Facebook className="social-auth__image" />
        <span className="social-auth__text">Facebook</span>
      </button>
    </div>
  );
};

export default Social;
