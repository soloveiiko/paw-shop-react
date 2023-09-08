import React from 'react';

const Subscribe = () => {
  return (
    <div className="subscribe__container container">
      <h3 className="subscribe__title">Get the latest news and promotions. No spam, just a few emails per year.</h3>
      <div className="subscribe__input-container">
        <input type="email" placeholder="Your e-mail" />
        <button className="subscribe__btn">Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
