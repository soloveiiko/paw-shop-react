import React, { useEffect, useState } from 'react';
import {
  Breadcrumbs,
  CategoryFilter,
  PetsFilter,
  ProductList,
  SortBy,
} from '@components';
import { catalogList } from '@utils/data';
import { useParams } from 'react-router-dom';
import { useProductsQuery } from '../../services/productApi';
export const sortByList = [
  { id: '1', name: 'Default', sort: 'default' },
  { id: '2', name: 'More expensive at first', sort: 'price', order: 'desc' },
  { id: '3', name: 'The cheapest first', sort: 'price', order: 'asc' },
  { id: '4', name: 'The most popular first', sort: 'rating', order: 'desc' },
];
const CatalogPage = () => {
  const [randomProducts, setRandomProducts] = useState([]);
  const [sortItem, setSortItem] = useState(sortByList[0].sort);
  const [orderItem, setOrderItem] = useState(sortByList[0].order);
  const [itemOffset, setItemOffset] = useState(0);
  const [selectedPage, setSelectedPage] = useState(0);
  const { slug } = useParams();
  const catalogId = slug;
  const { data } = useProductsQuery({
    per_page: 10,
    sort: sortItem,
    order: orderItem,
  });
  const itemsPerPage = 1;

  useEffect(() => {
    if (data) {
      setRandomProducts(data.data);
    }
  }, [data, sortItem, orderItem, itemOffset, selectedPage]);

  const selectedCatalog = catalogList.find(
    (catalog) => catalog.id === catalogId
  );
  const catalogProducts = randomProducts.filter(
    (product) => product.product.category.slug === selectedCatalog.id
  );

  const handleSort = (sort, order) => {
    setSortItem(sort);
    setOrderItem(order);
    setItemOffset(0);
    setSelectedPage(0);
  };

  const endOffset = itemOffset + itemsPerPage;
  const paginateItems = catalogProducts.slice(itemOffset, endOffset);
  const handlePagination = (event) => {
    const newOffset = (event.selected * itemsPerPage) % catalogProducts.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="page catalog-page">
      <Breadcrumbs />
      <h2>Catalog</h2>
      <section className="catalog-page__filters">
        <PetsFilter />
        <div className="container catalog-page__filters-container">
          <CategoryFilter />
          <SortBy
            sortByList={sortByList}
            handleSort={handleSort}
            sortItem={sortItem}
            orderItem={orderItem}
          />
        </div>
      </section>
      <section className="container catalog-page__product-container">
        <ProductList
          currentItems={paginateItems}
          products={catalogProducts}
          itemOffset={itemOffset}
          setItemOffset={setItemOffset}
          itemsPerPage={itemsPerPage}
          handlePagination={handlePagination}
          selectedPage={selectedPage}
        />
      </section>
    </div>
  );
};

export default CatalogPage;
