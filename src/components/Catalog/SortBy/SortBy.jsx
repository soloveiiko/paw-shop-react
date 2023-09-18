import React, { useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';
export const sortByList = [
  { id: '1', name: 'Default', code: 'default' },
  { id: '2', name: 'Popularity', code: 'popularity' },
  { id: '3', name: 'Cheaper', code: 'lowPrice' },
  { id: '4', name: 'Expensive', code: 'highPrice' },
];
const SortBy = () => {
  const [selectedSort, setSelectedSort] = useState(sortByList[0].id);
  const [isOpen, setIsOpen] = useState(false);

  const handleSortChange = (selectedSort) => {
    setSelectedSort(selectedSort);
  };
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`sort-by  ${isOpen ? 'open' : ''}`} tabIndex="0">
      <h3 className="sort-by__title">Sort by: </h3>
      <span className="sort-by__selected-item" onClick={toggleIsOpen}>
        {sortByList.find((el) => el.id === selectedSort)?.name}
        <SlArrowDown />
      </span>
      <ul className="sort-by__options">
        {sortByList.map((el) => (
          <li
            className={`sort-by__option ${selectedSort === el.id ? 'selected' : ''}`}
            key={el.id}
            onClick={() => handleSortChange(el.id)}
          >
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortBy;
