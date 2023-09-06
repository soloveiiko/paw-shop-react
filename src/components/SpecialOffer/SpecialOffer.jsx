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
      slidesPerView: 1,
      navigation: {
        enabled: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true,
      breakpoints: {
        385: {
          navigation: {
            enabled: false,
          },
        },
        768: {
          navigation: {
            enabled: true,
          },
        },
        1000: {
          navigation: {
            enabled: true,
          },
        },
      },
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
            gap: 10rem;
            top: auto;
            bottom: 33px;
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
      </div>
    </section>
  );
};

export default SpecialOffer;
