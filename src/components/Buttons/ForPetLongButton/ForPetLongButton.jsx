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
          <img src={icoCat} alt="Cat" />
          <img className="product-for-pets__arrow" src={icoArrowRight} alt="Arrow" />
        </Link>
      )}
      {isDog && (
        <Link to="#" className="product-for-pets__btn dog-btn">
          <span className="product-for-pets__text">
            Products for <b className="product-for-pets__marker dog">dog</b>
          </span>
          <img src={icoDog} alt="Dog" />
          <img className="product-for-pets__arrow" src={icoArrowRight} alt="Arrow" />
        </Link>
      )}
    </div>
  );
};

export default ForPetLongButton;
