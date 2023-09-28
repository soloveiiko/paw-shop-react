import React from 'react';
import { icoCat, icoDog } from '@static';
import { NavLink } from 'react-router-dom';

const PetsFilter = () => {
  return (
    <div className="pets-filter">
      <NavLink to="/catalog/cat" className="pets-filter__item_cat">
        <span className="pets-filter__text">
          for<b className="pets-filter__marker cat">cat</b>
        </span>
        <img className="pets-filter__icon" src={icoCat} width="30" height="30" loading="lazy" alt="Cat" />
      </NavLink>
      <NavLink to="/catalog/dog" className="pets-filter__item_dog">
        <span className="pets-filter__text">
          for<b className="pets-filter__marker dog">dog</b>
        </span>
        <img className="pets-filter__icon" src={icoDog} width="30" height="30" loading="lazy" alt="Dog" />
      </NavLink>
    </div>
  );
};

export default PetsFilter;
