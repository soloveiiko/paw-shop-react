import * as React from 'react';
const SvgArrowLeft = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={10}
    fill="none"
    viewBox="0 0 11 10"
    {...props}
  >
    <path
      stroke="#000"
      strokeWidth={0.5}
      d="M10.5 9.75 1 .25m0 0v7.5m0-7.5h7.5"
    />
  </svg>
);
export default SvgArrowLeft;
