import React, { useState } from 'react';
import ForPetShortButton from '@components/Base/Buttons/ForPetShortButton/ForPetShortButton';
import Benefits from '@components/Home/Banner/Benefits/Benefits';
import { bgCat, bgDog } from '@static';

const Banner = () => {
  const [isCatHovered, setIsCatHovered] = useState(false);
  const [isDogHovered, setIsDogHovered] = useState(false);

  const handleMouseEnter = (setHover) => {
    setHover(true);
  };

  const handleMouseLeave = (setHover) => {
    setHover(false);
  };

  return (
    <section className="main-page__banner banner">
      <div className="banner__container container">
        <h2 className="banner__title">
          Make your pet’s life better
          <span className="banner__title_duplicate">Make your pet’s life better</span>
        </h2>
        <div className="banner__for-pets">
          <ForPetShortButton isCat={true} className={isCatHovered ? 'hover' : ''} />
          <h3 className="banner__text">Toys and accessories that your pet will like</h3>
          <ForPetShortButton isDog={true} className={isDogHovered ? 'hover' : ''} />
        </div>
        <Benefits />
        <div className="banner__img">
          <div
            className="banner__img-container"
            onMouseEnter={() => handleMouseEnter(setIsCatHovered)}
            onMouseLeave={() => handleMouseLeave(setIsCatHovered)}
          >
            <img className="banner__image_cat" src={bgCat} width="428" height="700" alt="Cat" />
          </div>
          <div
            className="banner__img-container"
            onMouseEnter={() => handleMouseEnter(setIsDogHovered)}
            onMouseLeave={() => handleMouseLeave(setIsDogHovered)}
          >
            <img className="banner__image_dog" src={bgDog} width="760" height="860" alt="Dog" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
