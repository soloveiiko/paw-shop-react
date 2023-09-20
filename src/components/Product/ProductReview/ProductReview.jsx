import React, { useState } from 'react';
import { reviewsList } from '@utils/data';
import ReviewsItem from '@components/ReviewsItem/ReviewsItem';
import Pagination from '@components/Base/Pagination/Pagination';

const ProductReview = () => {
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 3;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = reviewsList.slice(itemOffset, endOffset);
  return (
    <div className="product-review">
      <div className="container product-review__container">
        <div className="product-review__stars-range">
          <div className="product-review__range"></div>
          <div className="product-review__count"></div>
        </div>
        <div className="product-review__list">
          {currentItems.map((review) => (
            <ReviewsItem key={review.id} review={review} />
          ))}
        </div>
        <Pagination
          items={reviewsList}
          itemsPerPage={itemsPerPage}
          pageRangeDisplayed={5}
          itemOffset={itemOffset}
          setItemOffset={setItemOffset}
        />
      </div>
    </div>
  );
};

export default ProductReview;
