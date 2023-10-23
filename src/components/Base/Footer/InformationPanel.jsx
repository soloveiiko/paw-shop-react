import React from 'react';
import { Link } from 'react-router-dom';
import {
  Email,
  FacebookWhite,
  Instagram,
  LogoWhite,
  Twitter,
} from '@static/images/icons';

const socialNetworkList = [
  { id: 1, name: 'Instagram', image: <Instagram />, link: '#' },
  { id: 2, name: 'Facebook', image: <FacebookWhite />, link: '#' },
  { id: 3, name: 'Twitter', image: <Twitter />, link: '#' },
];
const InformationPanel = () => {
  return (
    <div className="footer__information information-panel">
      <div className="information-panel__logo logo">
        <LogoWhite />
        PawShop
      </div>
      <div className="information-panel__number-wrapper">
        <Email />
        <a className="information-panel__number" href="tel:1-800-055-5566">
          1-800-055-5566
        </a>
      </div>
      <div className="information-panel__social-network social-network">
        <ul className="social-network__list">
          {socialNetworkList.map((el) => (
            <li key={el.id} className="social-network__item">
              <Link className="social-network__link" to={el.link}>
                {el.image}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InformationPanel;
