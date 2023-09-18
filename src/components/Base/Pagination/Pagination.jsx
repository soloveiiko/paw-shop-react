import React from 'react';
import ReactPaginate from 'react-paginate';
import { popularProducts } from '@utils/data';

const Pagination = ({ pageRangeDisplayed, itemsPerPage, items, setItemOffset }) => {
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % popularProducts.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };
  return (
    <ReactPaginate
      className="pagination"
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={pageRangeDisplayed}
      pageCount={pageCount}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
