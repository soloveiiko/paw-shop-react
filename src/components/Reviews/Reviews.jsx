import React from 'react';
import { bgKarsten } from '@static';
import { reviewsList } from '@utils/data';
import ReviewsItem from '@components/ReviewsItem/ReviewsItem';
import NextArrow from '@components/Arrows/NextArrow/NextArrow';
import PrevArrow from '@components/Arrows/PrevArrow/PrevArrow';
import Dots from '@components/Dots/Dots';

const Reviews = () => {
  return (
    <section className="main-page__reviews reviews">
      <div className="reviews__background">
        <img className="reviews__background-img" src={bgKarsten} alt="Karsten" />
      </div>
      <div className="reviews__container container">
        <h2 className="reviews__headline headline">Reviews</h2>
        <div className="reviews__list">
          {reviewsList.map((review) => (
            <ReviewsItem review={review} />
          ))}
        </div>
        <NextArrow />
        <PrevArrow />
        <Dots />
      </div>
    </section>
  );
};

export default Reviews;
