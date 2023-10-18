import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLazyProductsQuery } from '@services/productApi';
import {
  Breadcrumbs,
  CategoryFilter,
  Pagination,
  PetsFilter,
  ProductList,
  SortBy,
} from '@components';
import Preloader from '@components/Base/Preloader/Preloader';

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
  const navigate = useNavigate();
  const [getCatalogList, { data, isLoading, isError, error }] =
    useLazyProductsQuery();
  console.log('catalog data', data);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setCurrentPage(Number(params.get('page')) || 1);
    setSortItem(params.get('sort') || sortByList[0].sort);
    setOrderItem(params.get('order') || sortByList[0].order);
    getCatalogList({
      page: currentPage,
      per_page: 1,
      sort: sortItem,
      order: orderItem,
      category: slug,
    });
    console.log('currentPage', currentPage);
  }, [slug, currentPage, sortItem, orderItem, navigate]);

  const handleSort = (sort, order) => {
    const url = `/catalog/${slug}?sort=${sort}&order=${order}&page=1`;
    navigate(url);
    setSortItem(sort);
    setOrderItem(order);
    setCurrentPage(1);
  };

  const handlePagination = (selectedPage) => {
    setCurrentPage(selectedPage);
    const url = `/catalog/${slug}?sort=${sortItem}&order=${orderItem}&page=${selectedPage}`;
    navigate(url);
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
        {isLoading && <Preloader />}
        {isError && (
          <div className="not-found-message">{error.data.message}</div>
        )}
        {data && data.data && <ProductList currentItems={data.data} />}
        {data && data.data && data.meta.last_page > 1 && (
          <Pagination
            pageCount={data.meta.last_page}
            forcePage={data.meta.current_page}
            onPageChange={handlePagination}
          />
        )}
      </section>
    </div>
  );
};

export default CatalogPage;
