import React from 'react';
import { icoGoogle, icoFacebook } from '@static';
import Icon from '@components/Base/Icon/Icon';

const Social = () => {
  return (
    <div className="sign-in__container_right social-auth">
      <h3 className="social-auth__title">Sign In With:</h3>
      <button className="social-auth__btn_google">
        <Icon className="social-auth__image" name="google" />
        <span className="social-auth__text">Google</span>
      </button>
      <button className="social-auth__btn_facebook">
        <Icon className="social-auth__image" name="facebook" />
        <span className="social-auth__text">Facebook</span>
      </button>
    </div>
  );
};

export default Social;
