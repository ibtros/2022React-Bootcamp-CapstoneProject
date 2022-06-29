import {
  CurrentPageIndicator,
  NextPage,
  PaginationControls,
  PreviousPage,
  ProductsContainer,
} from './styles/SearchResultsStylesCss';
import { useEffect, useState } from 'react';

import { ProductsGrid } from '../components/ProductsGrid';
import arrow from '../up-arrow-svgrepo-com.svg';
import { useFeaturedProducts } from '../utils/hooks/useFeaturedProducts';
import { useSearchParams } from 'react-router-dom';

export const SearchResults = () => {
  const [query] = useSearchParams();
  const searchTerm = query.get("q");
  const [pageData, setPageData] = useState({
    page: 1,
    totalPages: null,
  });
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { 
    data: productsData, 
    isLoading: isProductsDataLoading,
  } = useFeaturedProducts({pageSize: 20, searchTerm});

  useEffect(() => {
    if (!isProductsDataLoading) {
      setPageData({
        page: productsData.page,
        totalPages: productsData.total_pages,
      })
      setFilteredProducts([...productsData.results]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isProductsDataLoading]);

  const handlePreviousPage = () => {
    if (pageData.page > 1) {
      setPageData({
        page: pageData.page - 1,
      });
    }
  };

  const handleNextPage = () => {
    if (pageData.page < pageData.totalPages) {
      setPageData({
        page: pageData.page + 1,
      });
    };
  };
  
  return (
    <ProductsContainer>
      {
        filteredProducts.length > 0 ?
          <ProductsGrid products={filteredProducts}/>
        :
          <h1>No data found</h1>
      }
      {
        pageData.totalPages > 1 ?
          <PaginationControls>
            <PreviousPage src={arrow} alt='previousPage' onClick={handlePreviousPage} />
              <CurrentPageIndicator>{pageData.page} / {pageData.totalPages}</CurrentPageIndicator>
            <NextPage src={arrow} alt='nextPage' onClick={handleNextPage} />
          </PaginationControls>
        :
          null
      }
    </ProductsContainer>
  )
}
