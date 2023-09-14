import React from 'react';

const Social = () => {
  return (
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
  );
};

export default Social;
