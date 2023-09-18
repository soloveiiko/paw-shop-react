import React from 'react';
const categoryList = [
  { id: 1, name: 'All' },
  { id: 2, name: 'Balls' },
  { id: 3, name: 'Beds' },
  { id: 4, name: 'Soft toys' },
];
const CategoryFilter = () => {
  return (
    <div className="category-filter">
      {categoryList.map((category) => (
        <button className="category-filter__item" key={category.id}>
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
