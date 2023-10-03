import React, { useEffect, useState } from 'react';
import { TfiClose } from 'react-icons/tfi';
import CartItem from '@components/Modals/Cart/CartItem/CartItem';
import { icoCart } from '@static';
import { useCartQuery } from '../../../services/cartApi';
import { useDispatch, useSelector } from 'react-redux';
import { setCartCount, setCartId } from '../../../redux/cart/cartSlice';
import Cookies from 'js-cookie';
const Cart = ({ handleCart }) => {
  const isOpenCart = useSelector((state) => state.modals.cartModal);
  const [cart, setCartList] = useState([]);
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart);
  console.log('cart wdlwekd', cartList);
  const { data } = useCartQuery();

  useEffect(() => {
    if (data && data.data) {
      console.log('Cart data:', data);
      setCartList(data);
      dispatch(setCartCount(data.data.purchases.length));
      dispatch(setCartId(data.data.id));
      Cookies.set('cart_id', data.data.id);
    }
  }, [data]);

  console.log('cart data', data);
  const handleDelete = (itemId) => {
    const updatedCartList = cart.filter((item) => item.id !== itemId);
    setCartList(updatedCartList);
  };
  // const totalSum = () => {
  //   return cart.reduce((acc, item) => acc + item.price * item.number, 0);
  // };
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
        {data && data.data ? (
          <>
            {data.data.purchases.map((item) => (
              <CartItem
                key={item.id}
                product={item}
                handleDelete={handleDelete}
              />
            ))}
          </>
        ) : (
          <div className="cart-layout__empty">Empty...</div>
        )}
      </div>
      <div className="cart-layout_bottom">
        <div className="cart-layout__subtotal">
          <span className="cart-layout__subtotal-title">Cart Subtotal: </span>
          {/*<b className="cart-layout__subtotal-price">${totalSum()}</b>*/}
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
