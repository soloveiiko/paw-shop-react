import React from 'react';
import { SlArrowRight } from 'react-icons/sl';

const NextArrow = ({ innerRef, onClick }) => {
  return (
    <div ref={innerRef} className="next-arrow" aria-hidden="true" onClick={onClick}>
      <SlArrowRight />
    </div>
  );
};

export default NextArrow;
