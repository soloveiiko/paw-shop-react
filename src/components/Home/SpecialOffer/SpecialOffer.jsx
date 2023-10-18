import React, { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import SpecialOfferItem from '@components/Home/SpecialOffer/SpecialOfferItem/SpecialOfferItem';
import NextArrow from '@components/Base/Arrows/NextArrow/NextArrow';
import PrevArrow from '@components/Base/Arrows/PrevArrow/PrevArrow';
import { specialOffer } from '@utils/data';

const SpecialOffer = () => {
  const swipeOfferRef = useRef(null);
  register();

  useEffect(() => {
    const swiperContainer = swipeOfferRef.current;
    const params = {
      slidesPerView: 1,
      navigation: {
        nextEl: '.next-arrow-offer',
        prevEl: '.prev-arrow-offer',
      },
      pagination: {
        clickable: true,
      },
      loop: true,
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <section className="main-page__special-offer special-offer">
      <div className="special-offer__container container">
        <swiper-container ref={swipeOfferRef} init="false">
          {specialOffer.map((slide) => (
            <swiper-slide key={slide.id}>
              <SpecialOfferItem slide={slide} />
            </swiper-slide>
          ))}
        </swiper-container>
        <PrevArrow className="prev-arrow-offer" />
        <NextArrow className="next-arrow-offer" />
      </div>
    </section>
  );
};

export default SpecialOffer;
