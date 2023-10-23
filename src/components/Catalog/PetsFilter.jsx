import React from 'react';
import { NavLink } from 'react-router-dom';
import { Cat, Dog } from '@static/images/icons';

const PetsFilter = () => {
  return (
    <div className="pets-filter">
      <NavLink
        to="/catalog/cat?sort=default&order=desc&page=1"
        className="pets-filter__item_cat"
      >
        <span className="pets-filter__text">
          for<b className="pets-filter__marker cat">cat</b>
        </span>
        <Cat className="pets-filter__icon" />
      </NavLink>
      <NavLink
        to="/catalog/dog?sort=default&order=desc&page=1"
        className="pets-filter__item_dog"
      >
        <span className="pets-filter__text">
          for<b className="pets-filter__marker dog">dog</b>
        </span>
        <Dog className="pets-filter__icon" />
      </NavLink>
    </div>
  );
};

export default PetsFilter;
