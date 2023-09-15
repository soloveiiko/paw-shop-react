import React, { useState } from 'react';
import { TfiClose } from 'react-icons/tfi';
import CartItem from '@components/Modals/Cart/CatrItem/CartItem';
import { icoCart } from '@static';

const cartList = [
  { id: 1, name: 'KONG Squeezz Ball Dog Toy, Red', image: '', price: 3, number: 1 },
  { id: 2, name: 'Interactive Stress Relief Dog Toy', image: '', price: 3, number: 1 },
];

const Cart = ({ handleCart, isOpenCart }) => {
  const [cart, setCartList] = useState(cartList);
  const handleDelete = (itemId) => {
    const updatedCartList = cart.filter((item) => item.id !== itemId);
    setCartList(updatedCartList);
  };
  return (
    <div className={`cart-layout${isOpenCart ? ' open' : ''}`}>
      <div className="cart-layout_top">
        <h3 className="cart-layout__title-wrapper">
          <img className="cart-layout__title-image" src={icoCart} alt="Cart" />
          <span className="cart-layout__title">Cart</span>
        </h3>
        <button className="cart-layout__close-btn" onClick={handleCart}>
          <TfiClose />
        </button>
      </div>
      <div className="cart-layout_center">
        {cart.length > 0 ? (
          <>
            {cart.map((item) => (
              <CartItem key={item.id} product={item} handleDelete={handleDelete} />
            ))}
          </>
        ) : (
          <div className="cart-layout__empty">Empty...</div>
        )}
      </div>
      <div className="cart-layout_bottom">
        <div className="cart-layout__subtotal">
          <span className="cart-layout__subtotal-title">Cart Subtotal: </span>
          <b className="cart-layout__subtotal-price">$8</b>
        </div>
        <div className="cart-layout__btn-container">
          <button className="cart-layout__shopping-btn">Keep shopping</button>
          <button className="cart-layout__buy-btn">Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
