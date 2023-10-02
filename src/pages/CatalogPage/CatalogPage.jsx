import React, { useEffect, useState } from 'react';
import {
  Breadcrumbs,
  CategoryFilter,
  PetsFilter,
  ProductList,
  SortBy,
} from '@components';
import { useNavigate, useParams } from 'react-router-dom';
import { useLazyProductsQuery } from '../../services/productApi';
import Pagination from '@components/Base/Pagination/Pagination';

const sortByList = [
  { id: '1', name: 'Default', sort: 'default', order: 'desc' },
  { id: '2', name: 'More expensive at first', sort: 'price', order: 'desc' },
  { id: '3', name: 'The cheapest first', sort: 'price', order: 'asc' },
  { id: '4', name: 'The most popular first', sort: 'rating', order: 'desc' },
];
const CatalogPage = () => {
  const [sortItem, setSortItem] = useState(sortByList[0].sort);
  const [orderItem, setOrderItem] = useState(sortByList[0].order);
  const [currentPage, setCurrentPage] = useState(1);
  const { slug } = useParams();
  const [getCatalogList, { data }] = useLazyProductsQuery();
  const itemsPerPage = 1;
  const navigate = useNavigate();

  useEffect(() => {
    // const params = new URLSearchParams(window.location.search);
    // const sortParam = params.get('sort') || sortByList[0].sort;
    // const orderParam = params.get('order') || sortByList[0].order;
    //
    // setSortItem(sortParam);
    // setOrderItem(orderParam);
    // setCurrentPage(Number(params.get('page')) || 1);

    getCatalogList({
      page: currentPage,
      per_page: itemsPerPage,
      sort: sortItem,
      order: orderItem,
      category: slug,
    }).then(() => {
      const url = `/catalog/${slug}?sort=${sortItem}&order=${orderItem}&page=${currentPage}`;
      navigate(url);
    });
  }, [slug, currentPage, sortItem, orderItem, navigate]);

  console.log('data', data);
  const handleSort = (sort, order) => {
    setSortItem(sort);
    setOrderItem(order);
    setCurrentPage(1);
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
        {data && <ProductList currentItems={data.data} />}
        {data && data.meta && (
          <Pagination
            pageRangeDisplayed={5}
            itemsPerPage={itemsPerPage}
            items={data.meta.total}
            setCurrentPage={setCurrentPage}
            pageCount={data.meta.last_page}
          />
        )}
      </section>
    </div>
  );
};

export default CatalogPage;
