import React from 'react';
import { TfiClose } from 'react-icons/tfi';
import CartItem from '@components/Modals/Cart/CatrItem/CartItem';

const cartList = [
  { id: 1, name: 'KONG Squeezz Ball Dog Toy, Red', image: '', price: 3, number: 1 },
  { id: 2, name: 'Interactive Stress Relief Dog Toy', image: '', price: 3, number: 1 },
];

const Cart = ({ handleCart }) => {
  console.log('cartList', cartList);
  return (
    <div className="cart-layout">
      <div className="cart-layout">
        <h3 className="cart-layout__title-wrapper">
          <img src="" alt="Cart" />
          <span className="cart-layout__title">Cart</span>
        </h3>
        <button className="cart-layout__close-btn" onClick={handleCart}>
          <TfiClose />
        </button>
      </div>
      <div className="cart-layout__center">
        {cartList.map((item) => (
          <CartItem product={item} />
        ))}
      </div>
      <div className="cart-layout__bottom"></div>
    </div>
  );
};

export default Cart;
