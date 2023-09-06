import React from 'react';
import { SlArrowRight } from 'react-icons/sl';

const NextArrow = ({ ref }) => {
  return (
    <div ref={ref} className="special-offer__next-arrow next-arrow">
      <SlArrowRight />
    </div>
  );
};

export default NextArrow;
