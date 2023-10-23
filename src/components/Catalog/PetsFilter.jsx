import React from 'react';
import { icoCat, icoDog } from '@static';
import { NavLink } from 'react-router-dom';
import Icon from '@components/Base/Icon/Icon';

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
        <Icon className="pets-filter__icon" name="cat" />
      </NavLink>
      <NavLink
        to="/catalog/dog?sort=default&order=desc&page=1"
        className="pets-filter__item_dog"
      >
        <span className="pets-filter__text">
          for<b className="pets-filter__marker dog">dog</b>
        </span>
        <Icon className="pets-filter__icon" name="dog" />
      </NavLink>
    </div>
  );
};

export default PetsFilter;
