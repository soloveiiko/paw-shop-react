import React, { useState } from 'react';
import { popularProducts } from '@utils/data';
import ProductItem from '@components/ProductItem/ProductItem';
import ReactPaginate from 'react-paginate';

const ProductList = () => {
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 2;

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = popularProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(popularProducts.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % popularProducts.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };
  return (
    <div className="product-list">
      <div className="product-list__wrapper">
        {currentItems.map((product) => (
          <ProductItem product={product} />
        ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default ProductList;
