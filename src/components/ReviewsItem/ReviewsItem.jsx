import React from 'react';
import { Link } from 'react-router-dom';
import { icoArrowAccent } from '@static';
import StarsRange from '@components/StarsRange/StarsRange';

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
        {review.images > 0 && <span className="reviews__show-more-image">+2</span>}
      </div>
      <Link to="#" className="reviews__link">
        See the product
        <img className="reviews__arrow" src={icoArrowAccent} alt="Arrow" />
      </Link>
    </div>
  );
};

export default ReviewsItem;
