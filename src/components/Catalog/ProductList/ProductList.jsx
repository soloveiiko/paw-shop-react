import React, { useState } from 'react';
import ProductItem from '@components/ProductItem/ProductItem';
import Pagination from '@components/Base/Pagination/Pagination';

const ProductList = ({ products }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);

  return (
    <div className="product-list">
      <div className="product-list__wrapper">
        {currentItems.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
      {products.length > 4 && (
        <Pagination
          items={products}
          itemsPerPage={itemsPerPage}
          pageRangeDisplayed={5}
          itemOffset={itemOffset}
          setItemOffset={setItemOffset}
        />
      )}
    </div>
  );
};

export default ProductList;
