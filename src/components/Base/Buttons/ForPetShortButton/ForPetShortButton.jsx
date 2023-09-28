import React from 'react';
import { icoArrowLeft, icoArrowRight } from '@static';
import { Link } from 'react-router-dom';

const ForPetShortButton = ({ isCat, isDog, className }) => {
  return (
    <div className="for-pets-btn-container for-pets">
      {isCat && (
        <Link to="/catalog/cat" className={`for-pets__btn cat-btn ${className}`}>
          <img className="for-pets__arrow" src={icoArrowLeft} width="9.5" height="9.5" loading="lazy" alt="arrow" />
          <span className="for-pets__text">
            For <b className="for-pets__marker cat">cat</b>
          </span>
        </Link>
      )}
      {isDog && (
        <Link to="/catalog/dog" className={`for-pets__btn dog-btn ${className}`}>
          <span className="for-pets__text">
            For <b className="for-pets__marker dog">dog</b>
          </span>
          <img className="for-pets__arrow" src={icoArrowRight} width="9.5" height="9.5" loading="lazy" alt="arrow" />
        </Link>
      )}
    </div>
  );
};

export default ForPetShortButton;
