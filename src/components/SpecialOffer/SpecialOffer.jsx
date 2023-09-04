import React from 'react';
import { bgCart, bgSpecialOffer, bgSpecialOfferTablet } from '../../assets';
import { NextArrow, PrevArrow, Dots } from '../commons';

const SpecialOffer = ({ isMobile, isTablet }) => {
  return (
    <section className="main-page__special-offer special-offer">
      <div className="special-offer__container container">
        <div className="special-offer__slider">
          <div className="special-offer__slide">
            {isMobile && <img className="special-offer__img" src={bgSpecialOffer} alt="Slide" />}
            {isTablet ? (
              <img className="special-offer__img" src={bgSpecialOfferTablet} alt="Slide" />
            ) : (
              <img className="special-offer__img" src={bgCart} alt="Special Offer" />
            )}
            <div className="special-offer__information">
              <h2 className="special-offer__title">
                <span className="special-offer__title-item">
                  <span className="special-offer__marker">FREE </span>SHIPPING
                </span>
                <span className="special-offer__duplicate-title">FREE SHIPPING</span>
              </h2>
              <h3 className="special-offer__text">
                Go to your shopping cart and use promocode <span>FREESHIPPING</span>
              </h3>
            </div>
          </div>
        </div>
        <PrevArrow />
        <NextArrow />
        <Dots />
      </div>
    </section>
  );
};

export default SpecialOffer;
