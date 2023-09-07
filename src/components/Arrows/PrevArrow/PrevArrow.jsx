import React from 'react';
import { SlArrowLeft } from 'react-icons/sl';

const PrevArrow = ({ ref }) => {
  return (
    <div ref={ref} className="prev-arrow">
      <SlArrowLeft />
    </div>
  );
};

export default PrevArrow;
