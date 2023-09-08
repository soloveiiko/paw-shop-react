import React, { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import { bgKarsten } from '@static';
import { reviewsList } from '@utils/data';
import ReviewsItem from '@components/ReviewsItem/ReviewsItem';
import PrevArrow from '@components/Arrows/PrevArrow/PrevArrow';
import NextArrow from '@components/Arrows/NextArrow/NextArrow';

register();
const Reviews = () => {
  const swiperElRef = useRef(null);
  useEffect(() => {
    const swiperContainer = swiperElRef.current;
    Object.assign(swiperContainer, {});
    const params = {
      loop: true,
      navigation: {
        nextEl: '.next-arrow',
        prevEl: '.prev-arrow',
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
        <PrevArrow onClick={() => swiperElRef.current?.slideNext()} />
        <NextArrow onClick={() => swiperElRef.current?.slidePrev()} />
      </div>
    </section>
  );
};

export default Reviews;
