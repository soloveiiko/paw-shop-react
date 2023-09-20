import React, { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import Image from '@components/Base/Image/Image';
import Amount from '@components/Base/Amount/Amount';

const CartItem = ({ product, handleDelete }) => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.price);

  return (
    <div className="cart-item">
      <div className="cart-item__img-container">
        <Image className="cart-item__image" src={product.image} alt="Product" />
      </div>
      <div className="cart-item__body">
        <h4 className="cart-item__title">{product.name}</h4>
        <div className="cart-item__range">
          <Amount product={product} quantity={quantity} setQuantity={setQuantity} setTotalPrice={setTotalPrice} />
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
