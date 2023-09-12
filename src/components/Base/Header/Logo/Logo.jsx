import React from 'react';
import { Link } from 'react-router-dom';
import { logoDark } from '@static';

const Logo = () => {
  return (
    <Link to="/" className="header__logo logo">
      <img className="logo__image" src={logoDark} width="36.337" height="42.739" loading="lazy" alt="Logo" />
      <span className="logo__text">PawShop</span>
    </Link>
  );
};

export default Logo;
