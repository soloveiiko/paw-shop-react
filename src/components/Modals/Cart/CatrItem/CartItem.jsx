import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';

const CartItem = ({ product }) => {
  return (
    <div className="cart-item">
      <div className="cart-item__img-container">
        <img src={product.image} alt="Product" />
      </div>
      <div className="cart-item__body">
        <h4 className="cart-item__title">{product.title}</h4>
        <div className="cart-item__range"></div>
      </div>
      <div className="cart-item__delete-btn">
        <button className="cart-item__btn">
          <RiDeleteBinLine />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
