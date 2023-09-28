import React from 'react';
import { SlArrowLeft } from 'react-icons/sl';

const PrevArrow = ({ innerRef, className }) => {
  return (
    <div ref={innerRef} className={`prev-arrow${className ? ` ${className}` : ''}`} aria-hidden="true">
      <SlArrowLeft />
    </div>
  );
};

export default PrevArrow;
