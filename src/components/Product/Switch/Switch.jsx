import React from 'react';
import AddReview from '@components/Product/AddReview/AddReview';

const Switch = () => {
  return (
    <div className="switch">
      <div className="switch__tabs tabs">
        <button className="tabs__description">Description</button>
        <button className="tabs__reviews">Reviews(3)</button>
        <button className="tabs__add-review">Write a review</button>
      </div>
      <div className="container switch__container">
        {/*<ProductCharacteristics />*/}
        {/*<ProductReview />*/}
        <AddReview />
      </div>
    </div>
  );
};

export default Switch;
