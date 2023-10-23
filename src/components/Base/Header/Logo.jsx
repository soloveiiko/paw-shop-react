import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@components/Base/Icon/Icon';

const Logo = () => {
  return (
    <Link to="/" className="header__logo logo">
      <Icon className="logo__image" name="logo-dark" />
      <h1 className="logo__text">PawShop</h1>
    </Link>
  );
};

export default Logo;
