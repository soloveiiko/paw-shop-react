import React from 'react';
import { icoStars } from '@static';

const StarsRange = ({ item }) => {
  const stars = item.stars
    ? Array.from({ length: item.stars }).map((_, index) => (
        <img key={index} src={icoStars} width="20" height="20" loading="lazy" alt="Star" />
      ))
    : Array.from({ length: 5 }).map((_, index) => (
        <img key={index} src={icoStars} width="20" height="20" loading="lazy" alt="Star" />
      ));
  return <div className="stars-range__list">{item.stars ? item.stars : stars}</div>;
};

export default StarsRange;
