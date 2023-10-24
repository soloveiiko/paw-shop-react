import React from 'react';
import { Link } from 'react-router-dom';
import { LogoDark } from '@static/images/icons';

const Logo = () => {
  return (
    <Link to="/" className="header__logo logo">
      <LogoDark className="logo__image" />
      <h1 className="logo__text">PawShop</h1>
    </Link>
  );
};

export default Logo;
