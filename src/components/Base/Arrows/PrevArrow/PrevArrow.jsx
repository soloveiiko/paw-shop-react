import React from 'react';
import { SlArrowLeft } from 'react-icons/sl';

const PrevArrow = ({ innerRef, onClick }) => {
  return (
    <div ref={innerRef} className="prev-arrow" aria-hidden="true" onClick={onClick}>
      <SlArrowLeft />
    </div>
  );
};

export default PrevArrow;
