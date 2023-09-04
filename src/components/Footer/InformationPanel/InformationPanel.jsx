import React from 'react';
import { facebook, icoEmail, instagram, logoWhite, twitter } from '../../../assets';
const socialNetworkList = [
  { id: 1, name: 'Instagram', image: instagram },
  { id: 2, name: 'Facebook', image: facebook },
  { id: 3, name: 'Twitter', image: twitter },
];
const InformationPanel = () => {
  return (
    <div className="footer__information information-panel">
      <div className="information-panel__logo logo">
        <img className="logo__image" src={logoWhite} alt="Logo" />
        PawShop
      </div>
      <div className="information-panel__number-wrapper">
        <img src={icoEmail} alt="Number" />
        <a className="information-panel__number" href="tel:1-800-055-5566">
          1-800-055-5566
        </a>
      </div>
      <div className="information-panel__social-network social-network">
        <ul className="social-network__list">
          {socialNetworkList.map((el) => (
            <li key={el.id} className="social-network__item">
              <img src={el.image} alt={el.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InformationPanel;
