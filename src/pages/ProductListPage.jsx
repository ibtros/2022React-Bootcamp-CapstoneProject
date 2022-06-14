import * as productsData from '../data/products.json';

import { useEffect, useState } from 'react';

import { Spinner } from '../components/Spinner';
import arrow from '../up-arrow-svgrepo-com.svg';
import { getProductCategoryById } from '../selectors/getProductCategoryById';
import { mockProductCategories } from '../data/product-categories';
import styled from 'styled-components';

const ProductListPageContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 560px) {
    flex-direction: column;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.div`
  background-color: #eadbcb;
  height: auto;
  width: 18%;

  @media (max-width: 560px) {
    height: 10%;
    width: 100%;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    height: 10%;
    width: 100%;
  }
`;

const SidebarList = styled.ul`
  height: auto;
  margin: 0%;
  padding: 10px;
  width: auto;

  @media (max-width: 560px) {
    margin: 0%;  
    padding: 0px;
  }
  
  @media (min-width: 561px) and (max-width: 820px) {
    display: flex;
    flex-direction: row;
    margin: 0%;  
    padding: 0px;
  }
`;

const SidebarElement = styled.li`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 50px;
  list-style-type: none;
  width: 100%;

  &:hover {
    background-color: #e3ceb9;
    cursor: pointer;
  }

  &.active {
    background-color: #dcc1a7;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    justify-content: center;
  }
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 82%;
  
  @media (max-width: 560px) {
    width: 100%;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    width: 100%;
  }
`;

const ProductsListContainer = styled.div`
  display: grid;
  gap: 4px;
  grid-template-columns: repeat(4, 1fr);
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 2%;
  
  @media (max-width: 560px) {
    display: grid;
    gap: 2px;
    grid-template-columns: repeat(2, 1fr);
    padding-left: 1%;
    padding-right: 1%;  
  }

  @media (min-width: 561px) and (max-width: 820px) {
    display: grid;
    gap: 1px;
    grid-template-columns: repeat(3, 1fr);
    padding-left: 2%;
    padding-right: 2%;  
  }
`;

const ProductContainer = styled.div`
  background-color: white;
  border-radius: 18px;
  height: 85%;
  width: 96%;
`;

const ProductDescriptionContainer = styled.div`
  background-color: white;
  border-radius: inherit;
  display: flex;
  flex-direction: row;
  height: 15%;
  justify-content: space-between;
  margin-bottom: 4px;
  padding-left: 3%;
  text-align: left;
`;

const ProductName = styled.p`
  font-family: "Times New Roman", Times, serif;
  font-size: 18px;
  font-weight: bolder;
  width: 60%;

  @media (max-width: 560px) {
    font-size: 12px;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    font-size: 16px;
  }
`;

const ProductPrice = styled.p`
  background-color: #d4b595;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  height: 2.5vh;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-top: 4px;
  width: 30%;

  @media (max-width: 560px) {
    font-size: 12px;
    width: 40%;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    font-size: 16px;
    width: 30%;
  }
`;

const ProductImage = styled.img`
  border-radius: 18px;
  height: 60%;
  margin-bottom: 15px;
  margin-top: 15px;
  width: 100%;
  
  @media (max-width: 560px) {
    height: 180px;
    width: 100%;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    height: 240px;
    width: 100%;
  }
`;

const ProductCategory = styled.p`
  background-color: #d4b595;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  height: 2.5vh;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-top: 4px;
  width: 30%;

  @media (max-width: 560px) {
    font-size: 12px;
    width: 40%;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    font-size: 16px;
    width: 30%;
  }
`;

const PaginationControls = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ChangePageArrow = styled.img`
  height: 7vh;
  width: 7vh;

  @media (min-width: 1px) and (max-width: 820px) {
    height: 5vh;
    width: 5vh;
  }
`;

const PreviousPage = styled(ChangePageArrow)`
  margin-right: 10px;
  transform: rotate(-90deg);
`;

const NextPage = styled(ChangePageArrow)`
  margin-left: 10px;
  transform: rotate(90deg);
`;

const CurrentPageIndicator = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 4vh;
  margin-left: 25px;
  margin-right: 25px;
  padding-bottom: 6px;

  @media (max-width: 560px) {
    font-size: 25px;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    font-size: 35px;
  }
`;

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
    return activeProductCategories.includes(productCategory.id);
  };

  return (
    <ProductListPageContainer>
      <Sidebar>
        <SidebarList>
          {
            productCategories.map(productCategory => 
              <SidebarElement 
                className={isActive(productCategory) ? 'active' : ''}
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
          <ProductsListContainer>
            {
              filteredProducts.map(product =>
                <ProductContainer key={product.id}>
                  <ProductDescriptionContainer>
                    <ProductName>{product.data.name}</ProductName>
                    <ProductPrice>$ {product.data.price}</ProductPrice>
                  </ProductDescriptionContainer>
                  <ProductImage 
                    src={product.data.mainimage.url} 
                    alt={product.data.mainimage.alt}
                  />
                  <ProductCategory>
                    {getProductCategoryById(product.data.category.id).name}
                  </ProductCategory>
                </ProductContainer>    
              )
            }
          </ProductsListContainer>
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
