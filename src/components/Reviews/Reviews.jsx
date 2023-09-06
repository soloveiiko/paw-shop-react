import React, { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import { bgKarsten } from '@static';
import { reviewsList } from '@utils/data';
import ReviewsItem from '@components/ReviewsItem/ReviewsItem';
register();
const Reviews = () => {
  const swiperElRef = useRef(null);
  useEffect(() => {
    const swiperContainer = swiperElRef.current;
    Object.assign(swiperContainer, {});
    const params = {
      loop: true,
      navigation: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        385: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30,
        },
        1000: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50,
        },
      },
      injectStyles: [
        `
          .swiper {
            padding: 0 0 30px 0;
           }
          .swiper-button-next,
          .swiper-button-prev {
            top: 50%;
            transform: translateY(-50%);
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            border-radius: 50rem;
            width: 59rem;
            height: 59rem;
            background-color: white;
            cursor: pointer;
            z-index: 10;
          }
          .swiper-button-next:hover svg,
          .swiper-button-prev:hover svg{
            width: 9px;
          }
          .swiper-button-next svg,
          .swiper-button-prev svg {
            width: 8px;
            height: auto;
            color: black;
          }
          .swiper-pagination-bullets.swiper-pagination-horizontal {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 30rem;
            top: auto;
            bottom: 0;
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
      <div className="reviews__background">
        <img className="reviews__background-img" src={bgKarsten} alt="Karsten" />
      </div>
      <div className="reviews__container container">
        <h2 className="reviews__headline headline">Reviews</h2>
        <swiper-container ref={swiperElRef} init="false">
          {reviewsList.map((review) => (
            <swiper-slide key={review.id}>
              <ReviewsItem review={review} />
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </section>
  );
};

export default Reviews;
