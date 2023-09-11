import React from 'react';

const SpecialOfferItem = ({ slide }) => {
  return (
    <div className="special-offer__slide">
      <div className="special-offer__img-container">
        <img className="special-offer__img" src={slide.image} width="567" height="425" alt="Slide" />
      </div>
      <div className="special-offer__information">
        <h2 className="special-offer__title">
          <span className="special-offer__title-item">
            <span className="special-offer__marker">{slide.title1} </span>
            {slide.title2}
          </span>
          <span className="special-offer__duplicate-title">
            {slide.title1} {slide.title2}
          </span>
        </h2>
        <h3 className="special-offer__text">
          {slide.title3}{' '}
          <span>
            {slide.title1}
            {slide.title2}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default SpecialOfferItem;
