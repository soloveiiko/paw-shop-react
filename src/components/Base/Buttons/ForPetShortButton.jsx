import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from '@static/images/icons';

const ForPetShortButton = ({ isCat, isDog, className }) => {
  return (
    <div className="for-pets-btn-container for-pets">
      {isCat && (
        <Link
          to="/catalog/cat?sort=default&order=desc&page=1"
          className={`for-pets__btn cat-btn ${className}`}
        >
          <ArrowLeft className="for-pets__arrow" />
          <span className="for-pets__text">
            For <b className="for-pets__marker cat">cat</b>
          </span>
        </Link>
      )}
      {isDog && (
        <Link
          to="/catalog/dog?sort=default&order=desc&page=1"
          className={`for-pets__btn dog-btn ${className}`}
        >
          <span className="for-pets__text">
            For <b className="for-pets__marker dog">dog</b>
          </span>
          <ArrowRight className="for-pets__arrow" />
        </Link>
      )}
    </div>
  );
};

export default ForPetShortButton;
