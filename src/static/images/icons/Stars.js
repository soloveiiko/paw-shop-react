import * as React from 'react';
const SvgStars = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={13}
    fill="none"
    viewBox="0 0 13 13"
    {...props}
  >
    <path
      fill="url(#stars_svg__a)"
      d="M2.549 12.963c.462.346 3.43-1.847 3.998-1.851.569-.005 3.57 2.137 4.027 1.783.457-.354-.618-3.986-.447-4.553.172-.568 3.045-2.894 2.865-3.458-.18-.565-3.812-.617-4.274-.963C8.255 3.575 7.03-.005 6.46 0c-.568.005-1.738 3.605-2.195 3.959C3.81 4.312.18 4.426.007 4.993c-.171.568 2.738 2.845 2.918 3.41.18.564-.839 4.214-.376 4.56Z"
    />
    <defs>
      <linearGradient
        id="stars_svg__a"
        x1={7.087}
        x2={2.231}
        y1={-0.264}
        y2={11.531}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E9A904" />
        <stop offset={1} stopColor="#FFC805" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgStars;
