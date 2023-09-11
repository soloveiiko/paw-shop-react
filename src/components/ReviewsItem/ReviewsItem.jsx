import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { icoArrowAccent } from '@static';
import StarsRange from '@components/StarsRange/StarsRange';

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
    <div className="reviews__item">
      <div className="reviews__date">{review.date}</div>
      <div className="reviews__user">
        <div className="reviews__username">{review.username}</div>
        <StarsRange item={review.stars} />
      </div>
      <div className="reviews__body">{review.body}</div>
      <div className="reviews__images">
        {displayedImages.map((img, index) => (
          <div key={index} className="reviews__img-container">
            <img className="reviews__image" src={img} width="64" height="66" alt="Review" />
          </div>
        ))}
        {review.images.length > maxVisibleImages && displayedImages.length < review.images.length && (
          <button className="reviews__show-more-image" onClick={toggleImageDisplay}>
            {`+${review.images.length - displayedImages.length}`}
          </button>
        )}
      </div>
      <Link to="#" className="reviews__link">
        See the product
        <img className="reviews__arrow" src={icoArrowAccent} width="9.5" height="9.5" alt="Arrow" />
      </Link>
    </div>
  );
};

export default ReviewsItem;
