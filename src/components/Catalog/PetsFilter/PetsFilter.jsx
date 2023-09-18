import React from 'react';
import { icoCat, icoDog } from '@static';

const PetsFilter = () => {
  return (
    <div className="pets-filter">
      <button className="pets-filter__item_cat">
        <span className="pets-filter__text">
          For <b className="pets-filter__marker cat">cat</b>
        </span>
        <img className="pets-filter__icon" src={icoCat} width="30" height="30" loading="lazy" alt="Cat" />
      </button>
      <button className="pets-filter__item_dog">
        <span className="pets-filter__text">
          For <b className="pets-filter__marker dog">dog</b>
        </span>
        <img className="pets-filter__icon" src={icoDog} width="30" height="30" loading="lazy" alt="Dog" />
      </button>
    </div>
  );
};

export default PetsFilter;
