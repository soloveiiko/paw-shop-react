import React from 'react';
import { facebook, icoEmail, instagram, logoWhite, twitter } from '@static';
import { Link } from 'react-router-dom';
import Icon from '@components/Base/Icon/Icon';

const socialNetworkList = [
  { id: 1, name: 'Instagram', image: 'instagram', link: '#' },
  { id: 2, name: 'Facebook', image: 'facebook-white', link: '#' },
  { id: 3, name: 'Twitter', image: 'twitter', link: '#' },
];
const InformationPanel = () => {
  return (
    <div className="footer__information information-panel">
      <div className="information-panel__logo logo">
        <Icon className="logo__image" name="logo-white" /> PawShop
      </div>
      <div className="information-panel__number-wrapper">
        <Icon className="information-panel__number-image" name="email" />
        <a className="information-panel__number" href="tel:1-800-055-5566">
          1-800-055-5566
        </a>
      </div>
      <div className="information-panel__social-network social-network">
        <ul className="social-network__list">
          {socialNetworkList.map((el) => (
            <li key={el.id} className="social-network__item">
              <Link className="social-network__link" to={el.link}>
                <Icon className="social-network__image" name={el.image} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InformationPanel;
