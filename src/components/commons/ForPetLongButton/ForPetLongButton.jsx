import React from 'react';
import { icoArrowRight, icoCat, icoDog } from '../../../assets';

const ForPetLongButton = ({ isCat, isDog }) => {
  return (
    <div className="product-for-pets-btn-container product-for-pets">
      {isCat && (
        <button className="product-for-pets__btn cat-btn">
          <span className="product-for-pets__text">
            Products for <b className="product-for-pets__marker cat">cat</b>
          </span>
          <img src={icoCat} alt="Cat" />
          <img className="product-for-pets__arrow" src={icoArrowRight} alt="Arrow" />
        </button>
      )}
      {isDog && (
        <button className="product-for-pets__btn dog-btn">
          <span className="product-for-pets__text">
            Products for <b className="product-for-pets__marker dog">dog</b>
          </span>
          <img src={icoDog} alt="Dog" />
          <img className="product-for-pets__arrow" src={icoArrowRight} alt="Arrow" />
        </button>
      )}
    </div>
  );
};

export default ForPetLongButton;
