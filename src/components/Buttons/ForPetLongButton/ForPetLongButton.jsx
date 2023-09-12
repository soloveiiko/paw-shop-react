import React from 'react';
import { icoArrowRight, icoCat, icoDog } from '@static';
import { Link } from 'react-router-dom';

const ForPetLongButton = ({ isCat, isDog }) => {
  return (
    <div className="product-for-pets-btn-container product-for-pets">
      {isCat && (
        <Link to="#" className="product-for-pets__btn cat-btn">
          <span className="product-for-pets__text">
            Products for <b className="product-for-pets__marker cat">cat</b>
          </span>
          <img className="product-for-pets__icon" src={icoCat} width="30" height="30" loading="lazy" alt="Cat" />
          <img
            className="product-for-pets__arrow"
            src={icoArrowRight}
            width="9.5"
            height="9.5"
            loading="lazy"
            alt="Arrow"
          />
        </Link>
      )}
      {isDog && (
        <Link to="#" className="product-for-pets__btn dog-btn">
          <span className="product-for-pets__text">
            Products for <b className="product-for-pets__marker dog">dog</b>
          </span>
          <img className="product-for-pets__icon" src={icoDog} width="30" height="30" loading="lazy" alt="Dog" />
          <img
            className="product-for-pets__arrow"
            src={icoArrowRight}
            width="9.5"
            height="9.5"
            loading="lazy"
            alt="Arrow"
          />
        </Link>
      )}
    </div>
  );
};

export default ForPetLongButton;
