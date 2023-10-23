import React from 'react';
const Icon = ({ name, ...props }) => {
  return (
    <svg {...props}>{/*<use xlinkHref={`${spriteHref}#${name}`} />*/}</svg>
  );
};

export default Icon;
