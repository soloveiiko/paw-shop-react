import React from 'react';
import { Link } from 'react-router-dom';
import { logoDark } from '@static';

const Logo = () => {
  return (
    <Link to="/" className="header__logo logo">
      <img className="logo__image" src={logoDark} width="36.337" height="42.739" loading="lazy" alt="Logo" />
      <h1 className="logo__text">PawShop</h1>
    </Link>
  );
};

export default Logo;
