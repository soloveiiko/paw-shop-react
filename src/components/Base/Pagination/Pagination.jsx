import React from 'react';
import ReactPaginate from 'react-paginate';
import { popularProducts } from '@utils/data';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

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
      previousClassName="pagination__prev-arrow"
      nextClassName="pagination__next-arrow"
      pageClassName="pagination__item"
      pageLinkClassName="pagination__link"
      breakClassName="pagination__dots"
      breakLabel="..."
      nextLabel={<SlArrowRight />}
      onPageChange={handlePageClick}
      pageRangeDisplayed={pageRangeDisplayed}
      pageCount={pageCount}
      previousLabel={<SlArrowLeft />}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
