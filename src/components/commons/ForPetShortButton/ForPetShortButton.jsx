import React from 'react';
import { icoArrowLeft, icoArrowRight } from '@static';

const ForPetShortButton = ({ isCat, isDog }) => {
  return (
    <div className="for-pets-btn-container for-pets">
      {isCat && (
        <button className="for-pets__btn cat-btn">
          <img className="for-pets__arrow" src={icoArrowLeft} alt="arrow" />
          <span className="for-pets__text">
            For <b className="for-pets__marker cat">cat</b>
          </span>
        </button>
      )}
      {isDog && (
        <button className="for-pets__btn dog-btn">
          <span className="for-pets__btn-text">
            For <b className="for-pets__marker dog">dog</b>
          </span>
          <img className="for-pets__arrow" src={icoArrowRight} alt="arrow" />
        </button>
      )}
    </div>
  );
};

export default ForPetShortButton;
