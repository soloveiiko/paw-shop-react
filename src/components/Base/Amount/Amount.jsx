import React from 'react';

const Amount = ({ setQuantity, quantity }) => {
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
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
