import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@components/Base/Header/Logo/Logo';
import Navbar from '@components/Base/Header/Navbar/Navbar';
import Tools from '@components/Base/Header/Tools/Tools';
import Sidebar from '@components/Base/Header/Sidebar/Sidebar';

const Header = () => {
  return (
    <header className="header">
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
