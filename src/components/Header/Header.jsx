import React from 'react';
import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';
import Tools from './Tools/Tools';
import Sidebar from './Sidebar/Sidebar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="paw-shop__header header">
      <div className="header__container">
        <Logo />
        <Navbar />
        <Link to="#" className="header__number" href="tel:1-800-055-5566">
          1-800-055-5566
        </Link>
        <Tools />
        <Sidebar />
      </div>
    </header>
  );
};

export default Header;
