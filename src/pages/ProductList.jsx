import {
  CurrentPageIndicator,
  NextPage,
  PaginationControls,
  PreviousPage,
  ProductListContainer,
  ProductsContainer,
  Sidebar,
  SidebarElement,
  SidebarList,
} from './styles/ProductListStylesCss';
import { useEffect, useState } from 'react';

import { ProductsGrid } from '../components/ProductsGrid';
import { Spinner } from '../components/Spinner';
import arrow from '../up-arrow-svgrepo-com.svg';
import { useFeaturedProducts } from '../utils/hooks/useFeaturedProducts';
import { useProductCategories } from '../utils/hooks/useProductCategories';
import { useSearchParams } from "react-router-dom";

export const ProductList = () => {
  const [query, setQuery] = useSearchParams();
  const category = query.get("category");
  const [activeProductCategories, setActiveProductCategories] = useState(
    category ? [category] : []
  );
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [productCategories, setProductCategories] = useState([]);
  const [pageData, setPageData] = useState({
    page: 1,
    totalPages: null,
  });

  const { 
    data: {results: productCategoriesData}, 
    isLoading: isProductCategoriesDataLoading,
  } = useProductCategories();

  const { 
    data: productsData, 
    isLoading: isProductsDataLoading,
  } = useFeaturedProducts({pageSize: 12, page: pageData.page});

  useEffect(() => {
    if (!isProductCategoriesDataLoading) {
      setProductCategories([...productCategoriesData]);
    }
    return () => setProductCategories([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isProductCategoriesDataLoading]);

  useEffect(() => {
    if (!isProductsDataLoading) {
      setPageData({
        page: productsData.page,
        totalPages: productsData.total_pages,
      })
      if (activeProductCategories.length === 0) {
          setFilteredProducts([...productsData.results]);
      } else {
        const newProducts = productsData.results.filter(product => 
          activeProductCategories.includes(product.data.category.id));
        setFilteredProducts([...newProducts]);      
      }  
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isProductsDataLoading, activeProductCategories]);
  
  const handleActivatedProductCategory = (productCategory) => {
    if (activeProductCategories.includes(productCategory.id)) {
      const index = activeProductCategories.indexOf(productCategory.id);
      const newActiveProductCategories = [...activeProductCategories];
      newActiveProductCategories.splice(index, 1);
      setActiveProductCategories([...newActiveProductCategories]);
    } else {
      setActiveProductCategories(currentActiveProductCategories => 
        [...currentActiveProductCategories, productCategory.id]);
    }
    if (category) {
      setQuery({});
    }
  };

  const isActive = (productCategory) => {
    return activeProductCategories.includes(productCategory.id);
  };

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
    <ProductListContainer>
      <Sidebar>
        <SidebarList>
          {
            productCategories.map(productCategory => 
              <SidebarElement 
                className={
                  activeProductCategories.length > 0 
                  ? (isActive(productCategory) ? 'active' : '') : ''
                }
                key={productCategory.id} 
                onClick={() => handleActivatedProductCategory(productCategory)}
              >
                {productCategory.data.name}
              </SidebarElement>
            )
          }
        </SidebarList>
      </Sidebar>
      {
        isProductsDataLoading ?
        <Spinner style={{'margin-left': '36% !important', 'margin-top': '5% !important'}}/>
        :
        <ProductsContainer>
          <ProductsGrid products={filteredProducts}/>
          {
            pageData.totalPages > 1 ? 
              <PaginationControls>
                <PreviousPage src={arrow} alt='previousPage' onClick={handlePreviousPage} />
                  <CurrentPageIndicator>
                    {pageData.page} / {pageData.totalPages}
                  </CurrentPageIndicator>
                <NextPage src={arrow} alt='nextPage' onClick={handleNextPage} />
              </PaginationControls>
            :
              null
          }
        </ProductsContainer>
      }
    </ProductListContainer>
  )
};
