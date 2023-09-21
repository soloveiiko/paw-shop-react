import React, { useState } from 'react';
import AddReview from '@components/Product/AddReview/AddReview';
import ProductCharacteristics from '@components/Product/ProductCharacteristics/ProductCharacteristics';
import ProductReview from '@components/Product/ProductReview/ProductReview';

const Switch = () => {
  const [activeTab, setActiveTab] = useState('description');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="switch">
      <div className="switch__tabs tabs">
        <button
          className={`tabs__description ${activeTab === 'description' ? 'selected' : ''}`}
          onClick={() => handleTabClick('description')}
        >
          Description
        </button>
        <button
          className={`tabs__reviews ${activeTab === 'reviews' ? 'selected' : ''}`}
          onClick={() => handleTabClick('reviews')}
        >
          Reviews(3)
        </button>
        <button
          className={`tabs__add-review ${activeTab === 'addReview' ? 'selected' : ''}`}
          onClick={() => handleTabClick('addReview')}
        >
          Write a review
        </button>
      </div>
      <div className="container switch__container">
        {activeTab === 'description' && <ProductCharacteristics />}
        {activeTab === 'reviews' && <ProductReview />}
        {activeTab === 'addReview' && <AddReview />}
      </div>
    </div>
  );
};

export default Switch;
