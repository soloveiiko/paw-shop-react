import React from 'react';
import { SlArrowRight } from 'react-icons/sl';

const NextArrow = ({ innerRef }) => {
  return (
    <div ref={innerRef} className="next-arrow" aria-hidden="true">
      <SlArrowRight />
    </div>
  );
};

export default NextArrow;
