import React from 'react';
import { icoArrowLeft, icoArrowRight } from '@static';
import { Link } from 'react-router-dom';

const ForPetShortButton = ({ isCat, isDog, className }) => {
  return (
    <div className="for-pets-btn-container for-pets">
      {isCat && (
        <Link to="#" className={`for-pets__btn cat-btn ${className}`}>
          <img className="for-pets__arrow" src={icoArrowLeft} alt="arrow" />
          <span className="for-pets__text">
            For <b className="for-pets__marker cat">cat</b>
          </span>
        </Link>
      )}
      {isDog && (
        <Link to="#" className={`for-pets__btn dog-btn ${className}`}>
          <span className="for-pets__text">
            For <b className="for-pets__marker dog">dog</b>
          </span>
          <img className="for-pets__arrow" src={icoArrowRight} alt="arrow" />
        </Link>
      )}
    </div>
  );
};

export default ForPetShortButton;
