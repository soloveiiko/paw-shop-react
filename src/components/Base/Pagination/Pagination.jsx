import React from 'react';
import ReactPaginate from 'react-paginate';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

const Pagination = ({
  pageRangeDisplayed,
  itemsPerPage,
  setCurrentPage,
  pageCount,
}) => {
  const handlePageClick = (event) => {
    const selectedPage = event.selected + 1;
    const newOffset = (selectedPage - 1) * itemsPerPage;
    console.log(
      `User requested page number ${selectedPage}, which is offset ${newOffset}`
    );
    setCurrentPage(selectedPage);
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
