import React from 'react';
import { preloader } from '@static';

const Preloader = () => {
  return (
    <div className="preloader">
      <img
        className="preloader__image"
        src={preloader}
        height="200"
        width="200"
        alt="Preloader"
      />
    </div>
  );
};

export default Preloader;
