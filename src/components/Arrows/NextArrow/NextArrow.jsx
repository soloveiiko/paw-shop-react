import React from 'react';
import { SlArrowRight } from 'react-icons/sl';

const NextArrow = ({ ref }) => {
  return (
    <div ref={ref} className="next-arrow">
      <SlArrowRight />
    </div>
  );
};

export default NextArrow;
