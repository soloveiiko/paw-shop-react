import React from 'react';
import { defaultImage } from '@static';

const Image = ({ key, className, src, width, height, loading, alt }) => {
  const handleImageError = (event) => {
    event.target.src = defaultImage;
  };

  return (
    <img
      key={key}
      className={className}
      src={src || defaultImage}
      width={width}
      height={height}
      loading={loading}
      alt={alt}
      onError={handleImageError}
    />
  );
};

export default Image;
