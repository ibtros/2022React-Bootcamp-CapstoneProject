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
import { mockProductCategories } from '../data/product-categories';

export const ProductListPage = () => {
  const productCategories = mockProductCategories.results;
  const [activeProductCategories, setActiveProductCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsloading] = useState(true);

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
    console.log('productCategory: ', productCategory);
    return activeProductCategories.includes(productCategory.id);
  };

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
