import React from 'react';
import { DOTS, usePagination } from '../../../hooks/usePagination';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

const CustomPagination = ({
  totalItemsCount,
  pageSize,
  currentPage,
  paginate,
  setCurrentPage,
  siblingCount = 1,
}) => {
  const paginationRange = usePagination({
    totalItemsCount,
    pageSize,
    currentPage,
    siblingCount,
  });
  const handlePrevClick = () => setCurrentPage((prev) => prev - 1);
  const handleNextClick = () => setCurrentPage((next) => next + 1);
  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div className="pagination">
      <SlArrowLeft
        onClick={handlePrevClick}
        className={`pagination__prev-arrow${
          currentPage === 1 ? ' disabled' : ''
        }`}
      />
      <ul className="pagination__list">
        {paginationRange.map((p) => {
          if (p === DOTS) {
            return (
              <li key={p} className="pagination__dots">
                &#8230;
              </li>
            );
          }
          return (
            <li
              key={p}
              id={p}
              onClick={() => paginate(p)}
              className={`pagination__item ${
                currentPage === p ? 'selected' : ''
              }`}
            >
              {p}
            </li>
          );
        })}
      </ul>
      <SlArrowRight
        onClick={handleNextClick}
        className={`pagination__next-arrow${
          currentPage === lastPage ? ' disabled' : ''
        }`}
      />
    </div>
  );
};

export default CustomPagination;
