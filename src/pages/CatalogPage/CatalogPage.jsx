import React, { useEffect } from 'react';
import { Breadcrumbs, CategoryFilter, PetsFilter, ProductList, SortBy } from '@components';
import { catalogList, popularProducts } from '@utils/data';
import { useParams } from 'react-router-dom';
import { catalogApi, useCatalogMutation } from '../../services/catalogApi';

const CatalogPage = () => {
  // const [selectedCatalog, setSelectedCatalog] = useState(null);
  const [catalog, { isLoading, isSuccess }] = useCatalogMutation();
  const { id } = useParams();
  const catalogId = id;
  const selectedCatalog = catalogList.find((catalog) => catalog.id === catalogId);
  const catalogProducts = popularProducts.filter((product) => product.catalog === selectedCatalog.code);
  useEffect(() => {}, []);
  const handleSubmit = async (data) => {
    const result = await catalogApi.mutateAsync(data);
    // Обробка результату
  };
  // console.log('catalog', catalog);
  // const catalogProducts = selectedCatalog
  //   ? popularProducts.filter((product) => product.catalog === selectedCatalog.code)
  //   : [];
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
