import React from 'react';
import { NavLink } from 'react-router-dom';

const navbarList = [
  {
    id: 1,
    name: 'For <b>cat</b>',
    link: '/catalog/cat?sort=default&order=desc&page=1',
  },
  {
    id: 2,
    name: 'For <b>dog</b>',
    link: '/catalog/dog?sort=default&order=desc&page=1',
  },
  { id: 3, name: 'Contacts', link: '#' },
  { id: 4, name: 'Tracking', link: '#' },
];
const Navbar = () => {
  return (
    <nav className="header__navbar navbar">
      <ul className="navbar__list">
        {navbarList.map((item) => (
          <li key={item.id} className="navbar__item">
            <NavLink
              className="navbar__link"
              to={item.link}
              dangerouslySetInnerHTML={{ __html: item.name }}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
