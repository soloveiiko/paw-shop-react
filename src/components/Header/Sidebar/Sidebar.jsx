import React from 'react';
import { NavLink } from 'react-router-dom';
import { SlClose } from 'react-icons/sl';
const navbarList = [
  { id: 1, name: 'Home', link: '#' },
  { id: 2, name: 'For <b>cat</b>', link: '#' },
  { id: 3, name: 'For <b>dog</b>', link: '#' },
  { id: 4, name: 'Contacts', link: '#' },
  { id: 5, name: 'Tracking', link: '#' },
];
const Sidebar = () => {
  return (
    <div className="header__sidebar sidebar">
      <div className="sidebar__top-block">
        <div className="sidebar__logo">Menu</div>
        <button className="sidebar__close-btn">
          <SlClose />
        </button>
      </div>
      <nav className="sidebar__container">
        {navbarList.map((item) => (
          <li key={item.id} className="sidebar__item">
            <NavLink to={item.link} dangerouslySetInnerHTML={{ __html: item.name }} />
          </li>
        ))}
      </nav>
      <a className="sidebar__number" href="tel:1-800-055-5566">
        1-800-055-5566
      </a>
    </div>
  );
};

export default Sidebar;
