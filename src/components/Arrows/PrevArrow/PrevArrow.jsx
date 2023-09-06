import React from 'react';
import { SlArrowLeft } from 'react-icons/sl';

const PrevArrow = ({ ref }) => {
  return (
    <div ref={ref} className="special-offer__prev-arrow prev-arrow">
      <SlArrowLeft />
    </div>
  );
};

export default PrevArrow;
