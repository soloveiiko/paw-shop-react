import React, { useState } from 'react';
import AddReview from '@components/Product/AddReview/AddReview';
import ProductCharacteristics from '@components/Product/ProductCharacteristics/ProductCharacteristics';
import ProductReview from '@components/Product/ProductReview/ProductReview';

const Switch = ({ description, commentsCount, productId }) => {
  const [activeTab, setActiveTab] = useState('description');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section className="switch">
      <div className="switch__tabs tabs">
        <button
          className={`tabs__description ${
            activeTab === 'description' ? 'selected' : ''
          }`}
          onClick={() => handleTabClick('description')}
        >
          Description
        </button>
        <button
          className={`tabs__reviews ${
            activeTab === 'reviews' ? 'selected' : ''
          }`}
          onClick={() => handleTabClick('reviews')}
        >
          Reviews({commentsCount})
        </button>
        <button
          className={`tabs__add-review ${
            activeTab === 'addReview' ? 'selected' : ''
          }`}
          onClick={() => handleTabClick('addReview')}
        >
          Write a review
        </button>
      </div>
      <div className="container switch__container">
        {activeTab === 'description' && (
          <ProductCharacteristics description={description} />
        )}
        {activeTab === 'reviews' && <ProductReview productId={productId} />}
        {activeTab === 'addReview' && <AddReview />}
      </div>
    </section>
  );
};

export default Switch;
