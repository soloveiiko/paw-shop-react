import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@components/Base/Header/Logo/Logo';
import Navbar from '@components/Base/Header/Navbar/Navbar';
import Tools from '@components/Base/Header/Tools/Tools';
import Sidebar from '@components/Base/Header/Sidebar/Sidebar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const windowWidth = window.innerWidth;
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <Navbar />
        <Link to="#" className="header__number" href="tel:1-800-055-5566">
          1-800-055-5566
        </Link>
        <Tools toggleSidebar={toggleSidebar} />
        {isOpen && windowWidth < 1000 && <Sidebar toggleSidebar={toggleSidebar} />}
      </div>
    </header>
  );
};

export default Header;
