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
        {currentItems.map((product) => (
          <ProductItem
            product={product}
            key={product.product.id}
            isDiscount={product.prices.discount}
            discountPercent={product.discount_percent}
            image={product.images[0].url}
            name={product.product.name}
            rating={product.product.rating}
            currPrice={product.prices.now}
            oldPrice={product.prices.old}
          />
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
