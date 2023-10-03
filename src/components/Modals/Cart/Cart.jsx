import React, { useEffect } from 'react';
import { TfiClose } from 'react-icons/tfi';
import CartItem from '@components/Modals/Cart/CartItem/CartItem';
import { icoCart } from '@static';
import { useCartQuery } from '@services/cartApi';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { setCartCount, setCartId, setTotalPrice } from '@redux/cart/cartSlice';

const Cart = ({ handleCart }) => {
  const isOpenCart = useSelector((state) => state.modals.cartModal);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { data } = useCartQuery();
  useEffect(() => {
    if (data && data.data) {
      console.log('Cart data:', data);
      dispatch(setCartCount(data.data.purchases.length));
      dispatch(setCartId(data.data.id));
      dispatch(setTotalPrice(data.total.purchases));
      Cookies.set('cart_id', data.data.id);
    }
  }, [data]);

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
              <CartItem key={item.id} product={item} />
            ))}
          </>
        ) : (
          <div className="cart-layout__empty">Empty...</div>
        )}
      </div>
      <div className="cart-layout_bottom">
        <div className="cart-layout__subtotal">
          <span className="cart-layout__subtotal-title">
            Cart Subtotal: {cart.totalPrice}
          </span>
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
