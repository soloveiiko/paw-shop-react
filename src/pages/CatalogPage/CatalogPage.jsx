import React, { useEffect, useState } from 'react';
import { Breadcrumbs, CategoryFilter, PetsFilter, ProductList, SortBy } from '@components';
import { catalogList } from '@utils/data';
import { useParams } from 'react-router-dom';
import { useProductsQuery } from '../../services/productApi';

const CatalogPage = () => {
  // const [selectedCatalog, setSelectedCatalog] = useState(null);
  // const [catalog, { isLoading, isSuccess }] = useCatalogMutation();
  const { id } = useParams();
  const catalogId = id;
  const [randomProducts, setRandomProducts] = useState([]);
  const { data } = useProductsQuery({ per_page: 4 });
  useEffect(() => {
    if (data) {
      setRandomProducts(data.data);
    }
  }, [data]);
  console.log('randomProducts', randomProducts);
  const selectedCatalog = catalogList.find((catalog) => catalog.id === catalogId);
  const catalogProducts = randomProducts.filter((product) => product.product.category.slug === selectedCatalog.id);

  return (
    <div className="page catalog-page">
      <Breadcrumbs item={selectedCatalog} />
      <h2>Catalog</h2>
      <section className="catalog-page__filters">
        <PetsFilter />
        <div className="container catalog-page__filters-container">
          <CategoryFilter />
          <SortBy />
        </div>
      </section>
      <section className="container catalog-page__product-container">
        <ProductList products={catalogProducts} />
      </section>
    </div>
  );
};

export default CatalogPage;
