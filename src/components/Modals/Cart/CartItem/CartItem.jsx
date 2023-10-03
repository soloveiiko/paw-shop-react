import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import Image from '@components/Base/Image/Image';
import Amount from '@components/Base/Amount/Amount';
import {
  useAddToCartMutation,
  useRemoveFromCartMutation,
} from '@services/cartApi';

const CartItem = ({ product }) => {
  const [addToCart] = useAddToCartMutation();
  const [removeFromCart] = useRemoveFromCartMutation();
  const handleIncrement = async () => {
    return await addToCart({
      id: product.id,
      data: { quantity: 1 },
    });
  };
  const handleDecrement = async () => {
    if (product.quantity > 1) {
      return await removeFromCart({
        id: product.id,
        data: { quantity: 1 },
      });
    }
  };
  const handleRemoveItem = async () => {
    return await removeFromCart({
      id: product.id,
      data: { quantity: product.quantity },
    });
  };
  return (
    <div className="cart-item">
      <div className="cart-item__img-container">
        <Image
          className="cart-item__image"
          src={product.variation.images[0]}
          alt="Product"
        />
      </div>
      <div className="cart-item__body">
        <h4 className="cart-item__title">{product.variation.name}</h4>
        <div className="cart-item__range">
          <Amount
            quantity={product.quantity}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
          <div className="cart-item__curr-price">${product.total}</div>
        </div>
      </div>
      <div className="cart-item__delete-btn">
        <button
          className="cart-item__btn"
          onClick={() => handleRemoveItem(product.id)}
        >
          <RiDeleteBinLine />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
