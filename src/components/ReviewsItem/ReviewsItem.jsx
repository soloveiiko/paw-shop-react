import React from 'react';
import { StarsRange } from '../commons';
import { icoArrowAccent } from '../../assets';

const ReviewsItem = ({ review }) => {
  return (
    <div className="reviews__item">
      <div className="reviews__date">{review.date}</div>
      <div className="reviews__user">
        <div className="reviews__username">{review.username}</div>
        <StarsRange />
      </div>
      <div className="reviews__body">{review.body}</div>
      <div className="reviews__images">
        {review.images.map((img, index) => (
          <div key={index} className="reviews__img-container">
            <img className="reviews__image" src={img} alt="Review" />
          </div>
        ))}
        <span className="reviews__show-more-image">+2</span>
      </div>
      <a href="#" className="reviews__link">
        See the product
        <img className="reviews__arrow" src={icoArrowAccent} alt="Arrow" />
      </a>
    </div>
  );
};

export default ReviewsItem;
