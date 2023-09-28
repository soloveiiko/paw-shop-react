import React, { useEffect, useRef, useState } from 'react';
import { register } from 'swiper/element/bundle';
import { reviewsList } from '@utils/data';
import ReviewsItem from '@components/ReviewsItem/ReviewsItem';
import PrevArrow from '@components/Base/Arrows/PrevArrow/PrevArrow';
import NextArrow from '@components/Base/Arrows/NextArrow/NextArrow';
import { useReviewQuery } from '../../../services/reviewApi';
import Preloader from '@components/Base/Preloader/Preloader';

const Reviews = () => {
  const swiperReviewRef = useRef(null);
  const [randomReviews, setRandomReviews] = useState([]);
  const { data } = useReviewQuery({ limit: 10 });
  console.log('data', randomReviews);
  register();

  useEffect(() => {
    if (data) {
      setRandomReviews(data.data);
    }
  }, [data]);

  useEffect(() => {
    const swiperContainer = swiperReviewRef.current;
    const params = {
      loop: true,
      navigation: {
        nextEl: '.next-arrow-review',
        prevEl: '.prev-arrow-review',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        385: {
          slidesPerView: 1.183,
          slidesPerGroup: 1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 18,
        },
        1000: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 30,
        },
      },
      injectStyles: [
        `
        .swiper {
          overflow: visible;
          overflow-x: clip;
        }
          .swiper-pagination-bullets.swiper-pagination-horizontal {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 30rem;
            top: auto;
            left: 50%;
            transform: translateX(-50%);
          }
          .swiper-pagination-bullet {
            width: 16rem;
            height: 16rem;
            border-radius: 50rem;
            background-color: rgba(255, 255, 255, 0.30);
            cursor: pointer;
          }
          .swiper-pagination-bullet-active {
            background-color: white;
          }
      `,
      ],
    };
    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <section className="main-page__reviews reviews">
      <div className="reviews__container container">
        <h2 className="reviews__headline headline">Reviews</h2>
        <swiper-container ref={swiperReviewRef} init="false">
          {reviewsList.map((review) => (
            <swiper-slide key={review.id}>
              {randomReviews.length > 0 ? (
                <>
                  <ReviewsItem
                    review={review}
                    date={review.created_at}
                    username={review.name}
                    rating={review.rating}
                    body={review.body}
                    images={review.images}
                  />
                </>
              ) : (
                <Preloader />
              )}
            </swiper-slide>
          ))}
        </swiper-container>
        <PrevArrow className="prev-arrow-review" />
        <NextArrow className="next-arrow-review" />
      </div>
    </section>
  );
};

export default Reviews;
