import React from 'react';

const Subscribe = () => {
  return (
    <div className="subscribe__container container">
      <div className="subscribe__img-container_top">
        <img className="subscribe__background" src="<%= require('./images/background/subscribe1.png') %>" alt="Toy" />
      </div>
      <h3 className="subscribe__title">Get the latest news and promotions. No spam, just a few emails per year.</h3>
      <div className="subscribe__input-container">
        <input type="email" placeholder="Your e-mail" />
        <button className="subscribe__btn">Subscribe</button>
      </div>
      <div className="subscribe__img-container_bottom">
        <img className="subscribe__background" src="<%= require('./images/background/ball.png') %>" alt="Toy" />
      </div>
    </div>
  );
};

export default Subscribe;
