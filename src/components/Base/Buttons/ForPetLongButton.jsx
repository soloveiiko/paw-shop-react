import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cat, Dog } from '@static/images/icons';

const ForPetLongButton = ({ isCat, isDog }) => {
  return (
    <div className="product-for-pets-btn-container product-for-pets">
      {isCat && (
        <Link
          to="/catalog/cat?sort=default&order=desc&page=1"
          className="product-for-pets__btn cat-btn"
        >
          <span className="product-for-pets__text">
            Products for <b className="product-for-pets__marker cat">cat</b>
          </span>
          <Cat />
          <ArrowRight />
        </Link>
      )}
      {isDog && (
        <Link
          to="/catalog/dog?sort=default&order=desc&page=1"
          className="product-for-pets__btn dog-btn"
        >
          <span className="product-for-pets__text">
            Products for <b className="product-for-pets__marker dog">dog</b>
          </span>
          <Dog />
          <ArrowRight />
        </Link>
      )}
    </div>
  );
};

export default ForPetLongButton;
