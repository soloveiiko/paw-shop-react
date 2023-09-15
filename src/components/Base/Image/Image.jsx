import React, { useState } from 'react';
import { defaultImage } from '@static';
import Preloader from '@components/Base/Preloader/Preloader';

const Image = ({ key, className, src, width, height, loading, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = (event) => {
    event.target.src = defaultImage;
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Preloader />}
      <img
        key={key}
        className={className}
        src={src || defaultImage}
        width={width}
        height={height}
        loading={loading}
        alt={alt}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    </>
  );
};

export default Image;
