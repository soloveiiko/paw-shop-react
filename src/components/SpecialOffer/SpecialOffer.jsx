import React, { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import { specialOffer } from '@utils/data';
import SpecialOfferItem from '@components/SpecialOfferItem/SpecialOfferItem';
import NextArrow from '@components/Arrows/NextArrow/NextArrow';
import PrevArrow from '@components/Arrows/PrevArrow/PrevArrow';

register();

const SpecialOffer = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperElRef.current;
    const params = {
      slidesPerView: 1,
      navigation: {
        nextEl: '.next-arrow',
        prevEl: '.prev-arrow',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true,
      injectStyles: [
        `
          .swiper-pagination-bullets.swiper-pagination-horizontal {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 24rem;
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
    <section className="main-page__special-offer special-offer">
      <div className="special-offer__container container">
        <swiper-container ref={swiperElRef} init="false">
          {specialOffer.map((slide) => (
            <swiper-slide key={slide.id}>
              <SpecialOfferItem slide={slide} />
            </swiper-slide>
          ))}
        </swiper-container>
        <PrevArrow onClick={() => swiperElRef.current?.slideNext()} />
        <NextArrow onClick={() => swiperElRef.current?.slidePrev()} />
      </div>
    </section>
  );
};

export default SpecialOffer;
