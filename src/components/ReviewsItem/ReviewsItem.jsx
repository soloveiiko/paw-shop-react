import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { icoArrowAccent } from '@static';
import StarsRange from '@components/Base/StarsRange/StarsRange';
import Image from '@components/Base/Image/Image';

const ReviewsItem = ({ review }) => {
  const [maxVisibleImages, setMaxVisibleImages] = useState(2);
  const [showAllImages, setShowAllImages] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 385 && windowWidth < 768) {
        setMaxVisibleImages(2);
      } else {
        setMaxVisibleImages(3);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleImageDisplay = () => {
    setShowAllImages(true);
    setMaxVisibleImages(review.images.length);
  };
  const displayedImages = showAllImages ? review.images : review.images.slice(0, maxVisibleImages);

  return (
    <div className="reviews-item">
      <div className="reviews-item__date">{review.date}</div>
      <div className="reviews-item__user">
        <div className="reviews-item__username">{review.username}</div>
        <StarsRange item={review.stars} />
      </div>
      <div className="reviews-item__body">{review.body}</div>
      <div className="reviews-item__images">
        {displayedImages.map((img, index) => (
          <div key={index} className="reviews-item__img-container">
            <Image className="reviews-item__image" src={img} width="64" height="66" loading="lazy" alt="Review" />
          </div>
        ))}
        {review.images.length > maxVisibleImages && displayedImages.length < review.images.length && (
          <button className="reviews-item__show-more-image" onClick={toggleImageDisplay}>
            {`+${review.images.length - displayedImages.length}`}
          </button>
        )}
      </div>
      <Link to="#" className="reviews-item__link">
        See the product
        <img className="reviews-item__arrow" src={icoArrowAccent} width="9.5" height="9.5" loading="lazy" alt="Arrow" />
      </Link>
    </div>
  );
};

export default ReviewsItem;
