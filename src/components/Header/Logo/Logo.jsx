import React from 'react';
import { Link } from 'react-router-dom';
import { logoDark } from '../../../assets';

const Logo = () => {
  return (
    <Link to="/" className="header__logo logo">
      <img className="logo__image" src={logoDark} alt="Logo" />
      <span className="logo__text">PawShop</span>
    </Link>
  );
};

export default Logo;
