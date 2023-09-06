import React from 'react';
import ForPetShortButton from '@components/Buttons/ForPetShortButton/ForPetShortButton';
import Benefits from '@components/Banner/Benefits/Benefits';
import { bgCat, bgDog } from '@static';

const Banner = () => {
  return (
    <section className="main-page__banner banner">
      <div className="banner__container container">
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
        <div className="banner__img">
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
