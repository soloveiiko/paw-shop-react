import * as React from 'react';
const SvgSliderArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={26}
    fill="none"
    viewBox="0 0 14 26"
    {...props}
  >
    <path stroke="#000" d="m1 25 12-12L1 1" />
  </svg>
);
export default SvgSliderArrow;
