import React from 'react';
import { icoBasket } from '../../../assets';

const InBasketButton = () => {
  return (
    <button className="in-basket__btn">
      +<img src={icoBasket} alt="In Basket" />
    </button>
  );
};

export default InBasketButton;
