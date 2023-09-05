import React from 'react';
import Benefits from './Benefits/Benefits';
import { bgBall, bgBone, bgCat, bgDog, bgPattern } from '@static';
import { ForPetShortButton } from '@commons';

const Banner = () => {
  return (
    <section className="main-page__banner banner">
      <div className="banner__main-background">
        <img src={bgPattern} alt="Pattern" />
        <img src={bgPattern} alt="Pattern" />
      </div>
      <div className="banner__container container">
        <div className="banner__img_top">
          <div className="banner__img-container">
            <img className="banner__image_ball" src={bgBall} alt="Ball" />
          </div>
          <div className="banner__img-container">
            <img className="banner__image_bone" src={bgBone} alt="Bone" />
          </div>
        </div>
        <h1 className="banner__title">
          Make your pet’s life better
          <span className="banner__title_duplicate">Make your pet’s life better</span>
        </h1>
        <div className="banner__for-pets">
          <ForPetShortButton isCat={true} />
          <h3 className="banner__text">Toys and accessories that your pet will like</h3>
          <ForPetShortButton isDog={true} />
        </div>
        <Benefits />
        <div className="banner__img_bottom">
          <div className="banner__img-container">
            <img className="banner__image_cat" src={bgCat} alt="Cat" />
          </div>
          <div className="banner__img-container">
            <img className="banner__image_dog" src={bgDog} alt="Dog" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
