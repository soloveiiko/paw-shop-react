import React from 'react';
import Subscribe from './Subscribe/Subscribe';
import InformationPanel from './InformationPanel/InformationPanel';
import Links from './Links/Links';
import Cards from './Cards/Cards';
import Copyright from './Copyright/Copyright';

const Footer = () => {
  return (
    <footer className="paw-shop__footer footer">
      <div className="footer__subscribe subscribe">
        <Subscribe />
      </div>
      <div className="footer__body">
        <div className="footer__top">
          <InformationPanel />
          <Links />
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom">
            <Cards />
            <Copyright />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
