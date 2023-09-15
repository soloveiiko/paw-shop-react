import React, { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import Image from '@components/Base/Image/Image';

const CartItem = ({ product, handleDelete }) => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.price);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    setTotalPrice((quantity + 1) * product.price);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotalPrice((quantity - 1) * product.price);
    }
  };
  return (
    <div className="cart-item">
      <div className="cart-item__img-container">
        <Image className="cart-item__image" src={product.image} alt="Product" />
      </div>
      <div className="cart-item__body">
        <h4 className="cart-item__title">{product.name}</h4>
        <div className="cart-item__range">
          <button className="cart-item__minus" onClick={handleDecrement}>
            -
          </button>
          <div className="cart-item__curr-quantity">{quantity}</div>
          <button className="cart-item__plus" onClick={handleIncrement}>
            +
          </button>
          <div className="cart-item__curr-price">${totalPrice}</div>
        </div>
      </div>
      <div className="cart-item__delete-btn">
        <button className="cart-item__btn" onClick={() => handleDelete(product.id)}>
          <RiDeleteBinLine />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
