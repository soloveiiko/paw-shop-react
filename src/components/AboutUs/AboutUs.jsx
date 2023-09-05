import React from 'react';
import { petCat, petDog } from '@static';

const AboutUs = () => {
  return (
    <section className="main-page__about-us about-us">
      <div className="about-us__container container">
        <h2 className="about-us__headline headline">About us</h2>
        <div className="about-us__list">
          <div className="about-us__item_dog">
            <div className="about-us__img-container">
              <img className="about-us__image" src={petDog} alt="Dog" />
            </div>
            <div className="about-us__text-wrapper">
              <h3 className="about-us__title">
                <b>Playtime</b> is your pup’s <b>favorite time</b>. Your dog needs play for his overall health and
                happiness.
              </h3>
              <p className="about-us__text">
                Dogs are pack animals, requiring physical play with you and other dogs. One of the most important
                benefits of doggie play is that it’s a bonding opportunity for you and your canine companion. Another
                benefit of pup play is exercise.
              </p>
              <p className="about-us__text">
                Playtime is also a great opportunity for puppy teaching moments. You can train your dog through play,
                and with dog toys. We carries the best dog toys from top dog toy makers like USA Bones & Chews,
                Nylabone, and KONG. There are dog balls and dog fetch toys, dog chew toys, plush dog toys, interactive
                dog toys, dog puzzles and rope and tug dog toys for your pup to play with.{' '}
              </p>
              <p className="about-us__text">
                Plush dog toys are great for canine’s seeking comfort as they can ease some pup anxiety. Interactive dog
                toys help stimulate your pup’s mind, which is the key to a fulfilling life. If your pup loves to chew on
                your prized possessions, dog chew toys can come to the rescue.
              </p>
            </div>
          </div>
          <div className="about-us__item_cat">
            <div className="about-us__text-wrapper">
              <h3 className="about-us__title">
                Cats <b>love to play</b>, but did you know that playtime is vital activity for kittens and adult cats
                too?
              </h3>
              <p className="about-us__text">
                Here you’ll find the best cat toys for every type of cat personality. For the active cat who’s
                agenda-driven, toys provide a much-needed physical release.{' '}
              </p>
              <p className="about-us__text">
                Having this type of cat personality means your cat loves to hunt, jump and run. If your feline friend
                matches this description, they’ll most likely prefer a playtime that includes cat ball toys, cat feather
                wands, and cat wands & teaser toys. Cat balls and chaser toys allow cats to swat, chase and pounce—all
                their favorite activities.
              </p>
              <p className="about-us__text">
                The best teaser toys are made with bright colors or sound effects to help entice curious cats. Teaser
                toys allow you to lift the object of desire above the cat where they can jump to reach. In addition, cat
                tunnels, cat chew toys and catnip toys are playtime favorites that your cat will love because they each
                bring something new to the table.
              </p>
            </div>
            <div className="about-us__img-container">
              <img className="about-us__image" src={petCat} alt="Cat" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
