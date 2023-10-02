import React, { useEffect, useState } from 'react';
import { useLazyProductReviewsQuery } from '../../../services/reviewApi';
import ReviewsItem from '@components/ReviewsItem/ReviewsItem';
import Pagination from '@components/Base/Pagination/Pagination';
import Preloader from '@components/Base/Preloader/Preloader';
import StarsRange from '@components/Base/StarsRange/StarsRange';
const ProductReview = ({ productId }) => {
  const itemsPerPage = 3;
  const [itemOffset, setItemOffset] = useState(0);
  const [reviewItemGet, { data }] = useLazyProductReviewsQuery();

  useEffect(() => {
    reviewItemGet({ id: productId });
  }, [data, productId]);

  if (!data || !data.data) {
    return <Preloader />;
  }

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.data.slice(itemOffset, endOffset);

  return (
    <div className="product-review">
      <div className="container product-review__container">
        <div className="product-review__stars-range">
          <StarsRange value={parseFloat(data.total.avg)} size="40" />
          <div className="product-review__range">
            {typeof data.total.avg === 'string'
              ? parseFloat(data.total.avg).toFixed(1)
              : data.total.avg.toFixed(1)}
          </div>
        </div>
        <div className="product-review__list">
          {currentItems.map((review) => (
            <ReviewsItem
              key={review.id}
              date={review.created_at}
              username={review.name}
              rating={review.rating}
              body={review.body}
              images={review.images}
              isLink={false}
            />
          ))}
        </div>
        {data.data.length > 3 && (
          <Pagination
            items={data.data}
            itemsPerPage={itemsPerPage}
            pageRangeDisplayed={5}
            itemOffset={itemOffset}
            setItemOffset={setItemOffset}
          />
        )}
      </div>
    </div>
  );
};

export default ProductReview;
