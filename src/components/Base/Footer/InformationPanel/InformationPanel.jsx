import React from 'react';
import { facebook, icoEmail, instagram, logoWhite, twitter } from '@static';
import { Link } from 'react-router-dom';

const socialNetworkList = [
  { id: 1, name: 'Instagram', image: instagram, link: '#' },
  { id: 2, name: 'Facebook', image: facebook, link: '#' },
  { id: 3, name: 'Twitter', image: twitter, link: '#' },
];
const InformationPanel = () => {
  return (
    <div className="footer__information information-panel">
      <div className="information-panel__logo logo">
        <img className="logo__image" src={logoWhite} width="54" height="63.514" alt="Logo" />
        PawShop
      </div>
      <div className="information-panel__number-wrapper">
        <img src={icoEmail} width="25" height="17.817" alt="Number" />
        <a className="information-panel__number" href="tel:1-800-055-5566">
          1-800-055-5566
        </a>
      </div>
      <div className="information-panel__social-network social-network">
        <ul className="social-network__list">
          {socialNetworkList.map((el) => (
            <li key={el.id} className="social-network__item">
              <Link className="social-network__link" to={el.link}>
                <img src={el.image} width="20" height="20" alt={el.name} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InformationPanel;
