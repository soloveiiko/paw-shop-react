import React from 'react';
import { NavLink } from 'react-router-dom';
import { TfiClose } from 'react-icons/tfi';

const navbarList = [
  { id: 1, name: 'Home', link: '#' },
  { id: 2, name: 'For <b>cat</b>', link: '#' },
  { id: 3, name: 'For <b>dog</b>', link: '#' },
  { id: 4, name: 'Contacts', link: '#' },
  { id: 5, name: 'Tracking', link: '#' },
];
const Sidebar = ({ toggleSidebar, isOpen }) => {
  return (
    <div className={`header__sidebar sidebar${isOpen ? ' open' : ''}`}>
      <div className="sidebar__top">
        <div className="sidebar__logo">Menu</div>
        <button onClick={toggleSidebar} className="sidebar__close-btn">
          <TfiClose />
        </button>
      </div>
      <nav className="sidebar__container">
        <ul className="sidebar__list">
          {navbarList.map((item) => (
            <li key={item.id} className="sidebar__item">
              <NavLink className="sidebar__link" to={item.link} dangerouslySetInnerHTML={{ __html: item.name }} />
            </li>
          ))}
        </ul>
      </nav>
      <a className="sidebar__number" href="tel:1-800-055-5566">
        1-800-055-5566
      </a>
    </div>
  );
};

export default Sidebar;
