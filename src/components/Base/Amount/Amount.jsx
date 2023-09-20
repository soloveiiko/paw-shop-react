import React from 'react';

const Amount = ({ setQuantity, quantity, product, setTotalPrice }) => {
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
    <div className="amount">
      <button className="amount__minus" onClick={handleDecrement}>
        -
      </button>
      <div className="amount__curr-quantity">{quantity}</div>
      <button className="amount__plus" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default Amount;
