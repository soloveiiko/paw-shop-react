import React, {useEffect, useRef} from 'react';
import {useReviewsQuery} from '@services/reviewApi';
import {register} from 'swiper/element/bundle';
import ReviewsItem from '@components/ReviewsItem/ReviewsItem';
import PrevArrow from '@components/Base/Arrows/PrevArrow/PrevArrow';
import NextArrow from '@components/Base/Arrows/NextArrow/NextArrow';
import Preloader from '@components/Base/Preloader/Preloader';

const Reviews = () => {
  const {data, isLoading,isError ,error} = useReviewsQuery({limit: 10});
  const swiperReviewRef = useRef(null);
  if (isError) {
    console.log(error)
  }
  register();

  useEffect(() => {
    const swiperContainer = swiperReviewRef.current;
    const params = {
      navigation: {
        nextEl: '.next-arrow-review',
        prevEl: '.prev-arrow-review',
      },
      pagination: {
        clickable: true,
        dynamicBullets: true,
      },
      loop: true,
      observer: true,
      observeSlideChildren: true,
      observeParents: true,
      breakpoints: {
        385: {
          slidesPerView: 1.183,
          slidesPerGroup: 1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 18,
        },
        1000: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 30,
        },
      },
    };
    if (data) {
      Object.assign(swiperContainer, params);
      swiperContainer.initialize();
    }
  }, [data]);

  return (
    <section className="main-page__reviews reviews">
      <div className="reviews__container container">
        <h2 className="reviews__headline headline">Reviews</h2>
        {isLoading ? <Preloader/> : <>
          <swiper-container init="false" ref={swiperReviewRef}>
            {data.data.map((review) => (
              <swiper-slide key={review.id}>
                <ReviewsItem
                  date={review.created_at}
                  username={review.name}
                  rating={review.rating}
                  body={review.body}
                  images={review.images}
                  isLink={true}
                />
              </swiper-slide>
            ))}
          </swiper-container>
          <PrevArrow className="prev-arrow-review"/>
          <NextArrow className="next-arrow-review"/>
        </>}
      </div>
    </section>
  );
};

export default Reviews;
