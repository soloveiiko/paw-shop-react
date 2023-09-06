import React, { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import { specialOffer } from '@utils/data';
import SpecialOfferItem from '@components/SpecialOfferItem/SpecialOfferItem';

register();

const SpecialOffer = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperElRef.current;
    const params = {
      navigation: true,
      pagination: true,
      injectStyles: [
        `
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
            bottom: 100px;
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
        <swiper-container slides-per-view="1" ref={swiperElRef} init="false" loop="true">
          {specialOffer.map((slide) => (
            <SpecialOfferItem slide={slide} />
          ))}
        </swiper-container>
      </div>
    </section>
  );
};

export default SpecialOffer;
