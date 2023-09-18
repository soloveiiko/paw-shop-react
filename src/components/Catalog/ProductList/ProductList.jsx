import React, { useState } from 'react';
import { popularProducts } from '@utils/data';
import ProductItem from '@components/ProductItem/ProductItem';
import Pagination from '@components/Base/Pagination/Pagination';

const ProductList = () => {
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 2;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = popularProducts.slice(itemOffset, endOffset);

  return (
    <div className="product-list">
      <div className="product-list__wrapper">
        {currentItems.map((product) => (
          <ProductItem product={product} />
        ))}
      </div>
      <Pagination
        items={popularProducts}
        itemsPerPage={itemsPerPage}
        pageRangeDisplayed={5}
        itemOffset={itemOffset}
        setItemOffset={setItemOffset}
      />
    </div>
  );
};

export default ProductList;
