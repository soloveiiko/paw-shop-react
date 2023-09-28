import React from 'react';
import { SlArrowRight } from 'react-icons/sl';

const NextArrow = ({ innerRef, className }) => {
  return (
    <div ref={innerRef} className={`next-arrow${className ? ` ${className}` : ''}`} aria-hidden="true">
      <SlArrowRight />
    </div>
  );
};

export default NextArrow;
