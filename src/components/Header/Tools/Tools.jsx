import React from 'react';
import { icoBasket, icoUser } from '@static';

const Tools = () => {
  return (
    <div className="header__tools tools">
      <div className="tools__profile">
        <img src={icoUser} alt="Profile" />
      </div>
      <div className="tools__basket">
        <div className="tools__basket-img">
          <img src={icoBasket} alt="Basket" />
        </div>
        <div className="tools__basket-counter">2</div>
        <div className="tools__basket-price">$8</div>
      </div>
      <div className="tools__btn-container">
        <button className="tools__open-sidebar-btn"></button>
      </div>
    </div>
  );
};

export default Tools;
