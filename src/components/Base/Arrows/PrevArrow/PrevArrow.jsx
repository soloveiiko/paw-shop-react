import React from 'react';
import { SlArrowLeft } from 'react-icons/sl';

const PrevArrow = ({ innerRef }) => {
  return (
    <div ref={innerRef} className="prev-arrow" aria-hidden="true">
      <SlArrowLeft />
    </div>
  );
};

export default PrevArrow;
