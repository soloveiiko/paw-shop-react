import React from 'react';
import ProductItem from '@components/ProductItem/ProductItem';
import Pagination from '@components/Base/Pagination/Pagination';

const ProductList = ({
  products,
  setItemOffset,
  itemOffset,
  currentItems,
  itemsPerPage,
  handlePagination,
  selectedPage,
}) => {
  return (
    <div className="product-list">
      <div className="product-list__wrapper">
        {currentItems.map((product) => (
          <ProductItem
            product={product}
            key={product.product.id}
            isDiscount={product.prices.discount}
            discountPercent={product.discount_percent}
            image={product.images[0].url}
            name={product.product.name}
            rating={product.product.rating}
            commentsCount={product.product.comments_count}
            currPrice={product.prices.now}
            oldPrice={product.prices.old}
          />
        ))}
      </div>
      {products.length > itemsPerPage && (
        <Pagination
          items={products}
          itemsPerPage={itemsPerPage}
          pageRangeDisplayed={5}
          itemOffset={itemOffset}
          setItemOffset={setItemOffset}
          handlePagination={handlePagination}
          selectedPage={selectedPage}
        />
      )}
    </div>
  );
};

export default ProductList;
