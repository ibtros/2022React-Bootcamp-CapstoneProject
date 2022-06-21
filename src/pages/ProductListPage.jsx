import * as productsData from '../data/products.json';

import {
  CurrentPageIndicator,
  NextPage,
  PaginationControls,
  PreviousPage,
  ProductListPageContainer,
  ProductsContainer,
  Sidebar,
  SidebarElement,
  SidebarList,
} from './styles/ProductListPageStylesCss';
import { useEffect, useState } from 'react';

import { ProductList } from '../components/ProductList';
import { Spinner } from '../components/Spinner';
import arrow from '../up-arrow-svgrepo-com.svg';
import { useProductCategories } from '../utils/hooks/useProductCategories';
import { useSearchParams } from "react-router-dom";

// import { mockProductCategories } from '../data/product-categories';



export const ProductListPage = () => {
  const [query] = useSearchParams();
  const category = query.get("category");
  const [activeProductCategories, setActiveProductCategories] = useState(
    category ? [category] : []
  );
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [productCategories, setProductCategories] = useState([]);

  const { 
    data: {results: productCategoriesData}, 
    isLoading: isProductCategoriesDataLoading,
  } = useProductCategories();

  useEffect(() => {
    if (activeProductCategories.length === 0) {
      setIsloading(true);
      setTimeout(() => 
      {
        setFilteredProducts([...productsData.results]);
        setIsloading(false); 
      }, 2000);   
    } else {
      const newProducts = productsData.results.filter(product => 
        activeProductCategories.includes(product.data.category.id));
      setFilteredProducts([...newProducts]);      
    }
  }, [activeProductCategories]);

  useEffect(() => {
    if (!isProductCategoriesDataLoading) {
      setProductCategories([...productCategoriesData]);
    }
    return () => setProductCategories([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isProductCategoriesDataLoading]);
  
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
  };

  const isActive = (productCategory) => {
    return activeProductCategories.includes(productCategory.id);
  };
  console.log('productCategories: ', productCategories);

  return (
    <ProductListPageContainer>
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
        isLoading ?
        <Spinner />
        :
        <ProductsContainer>
          <ProductList products={filteredProducts}/>
          <PaginationControls>
            <PreviousPage src={arrow} alt='previousPage' />
              <CurrentPageIndicator>{1}</CurrentPageIndicator>
            <NextPage src={arrow} alt='nextPage' />
          </PaginationControls>
        </ProductsContainer>
      }
    </ProductListPageContainer>
  )
};
