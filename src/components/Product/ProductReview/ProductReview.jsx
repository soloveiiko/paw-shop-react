import React, { useEffect, useState } from 'react';
import { useLazyProductReviewsQuery } from '../../../services/reviewApi';
import ReviewsItem from '@components/ReviewsItem/ReviewsItem';

const ProductReview = ({ productId }) => {
  const itemsPerPage = 3;
  const [itemOffset, setItemOffset] = useState(0);
  const [reviewItemGet, { data }] = useLazyProductReviewsQuery({
    per_page: itemsPerPage,
  });

  useEffect(() => {
    reviewItemGet(productId);
  }, [data, productId]);
  // const selectedProducts =
  console.log('reviewsList', data);
  // const endOffset = itemOffset + itemsPerPage;
  // const currentItems = reviewsList.slice(itemOffset, endOffset);
  return (
    <div className="product-review">
      {data && (
        <div className="container product-review__container">
          <div className="product-review__stars-range">
            <div className="product-review__range"></div>
            <div className="product-review__count"></div>
          </div>
          <div className="product-review__list">
            {data.data.map((review) => (
              <ReviewsItem
                date={review.created_at}
                username={review.name}
                rating={review.rating}
                body={review.body}
                images={review.images}
              />
            ))}
          </div>
          {/*<Pagination*/}
          {/*  items={reviewsList}*/}
          {/*  itemsPerPage={itemsPerPage}*/}
          {/*  pageRangeDisplayed={5}*/}
          {/*  itemOffset={itemOffset}*/}
          {/*  setItemOffset={setItemOffset}*/}
          {/*/>*/}
        </div>
      )}
    </div>
  );
};

export default ProductReview;
