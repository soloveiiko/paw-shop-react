import React from 'react';
import { icoBasket, icoUser } from '@static';

const Tools = ({ toggleSidebar }) => {
  return (
    <div className="header__tools tools">
      <div className="tools__profile">
        <img src={icoUser} width="26" height="26" alt="Profile" />
      </div>
      <div className="tools__basket">
        <div className="tools__basket-img">
          <img src={icoBasket} width="26" height="26" alt="Basket" />
        </div>
        <div className="tools__basket-counter">2</div>
        <div className="tools__basket-price">$8</div>
      </div>
      <div className="tools__btn-container" onClick={toggleSidebar}>
        <button className="tools__open-sidebar-btn"></button>
      </div>
    </div>
  );
};

export default Tools;
