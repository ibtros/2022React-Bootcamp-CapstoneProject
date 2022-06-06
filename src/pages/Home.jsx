import * as mockFeaturedBanners from '../data/featured-banners.json';
import * as mockFeaturedProducts from '../data/featured-products.json';

import { useEffect, useState } from 'react';

import arrow from '../up-arrow-svgrepo-com.svg';
import { getProductCategoryById } from '../selectors/getProductCategoryById';
import { mockProductCategories } from '../data/product-categories';
import styled from 'styled-components';

const ProductCategoriesContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 5vh;
  margin-bottom: 5vh;
`;

const Arrow = styled.img`
  height: 10vh;
  width: 10vh;

  @media (max-width: 560px) {
    height: 5vh;
    width: 5vh;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    height: 8vh;
    width: 8vh;
  }
`;

const LeftArrow = styled(Arrow)`
  margin-right: 10px;
  transform: rotate(-90deg);
`;

const RightArrow = styled(Arrow)`
  margin-left: 10px;
  transform: rotate(90deg);
`;

const ProductCategoryImage = styled.img`
  height: 560px;
  opacity: 0;
  transition: 2s;
  width: 80%;
  &.loaded {
    opacity: 1;
  }

  @media (max-width: 560px) {
    height: 200px;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    height: 420px;
  }
`;

const FeaturedProductsContainer = styled.div`
  display: grid;
  gap: 4px;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 40px;

  @media (max-width: 560px) {
    display: grid;
    gap: 2px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 561px) and (max-width: 820px) {
    display: grid;
    gap: 2px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeaturedProductImage = styled.img`
  height: 280px;
  width: 260px;

  @media (max-width: 560px) {
    height: 180px;
    width: 160px;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    height: 240px;
    width: 220px;
  }
`;

const FeaturedBannersContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 5vh;
`;

const FeaturedBannerImage = styled.img`
  height: 465px;
  margin-top: 5vh;
  width: 820px;

  @media (max-width: 560px) {
    height: 160px;
    width: 260px;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    height: 360px;
    width: 560px;
  }
`;

export const Home = () => {
  const productCategories = mockProductCategories.results;
  const featuredProducts = mockFeaturedProducts.results;
  const featuredBanners = mockFeaturedBanners.default.results;
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [productCategory, setProductCategory] = useState(
    productCategories[selectedCategoryIndex]
  );
  const [selectedBannerIndex, setSelectedBannerIndex] = useState(0);
  const [featuredBanner, setFeaturedBanner] = useState(
    featuredBanners[selectedBannerIndex]
  );
  const [productCategoryLoaded, setProductCategoryLoaded] = useState(false);

  useEffect(() => {
    setFeaturedBanner(featuredBanners[selectedBannerIndex]);
  }, [featuredBanners, selectedBannerIndex]);
  
  const handlePreviousImage = () => {
    selectedBannerIndex === 0 ?
      setSelectedBannerIndex(featuredBanners.length - 1) 
      : setSelectedBannerIndex(selectedBannerIndex - 1);
  }

  const handleNextImage = () => {
    selectedBannerIndex === featuredBanners.length - 1 ?
      setSelectedBannerIndex(0) 
      : setSelectedBannerIndex(selectedBannerIndex + 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      selectedCategoryIndex < productCategories.length - 1 ?
        setSelectedCategoryIndex(selectedCategoryIndex + 1) 
      : setSelectedCategoryIndex(0);
      setProductCategory(productCategories[selectedCategoryIndex]);
    }, 1000)
    return () => clearInterval(interval);
  })
  
  return (
    <>
      <FeaturedBannersContainer>
        <LeftArrow src={arrow} alt='leftArrow' onClick={handlePreviousImage}/>
        <FeaturedBannerImage
          src={featuredBanner.data.main_image.url} 
          alt={featuredBanner.data.main_image.alt}
        />
        <RightArrow src={arrow} alt='rigthArrow' onClick={handleNextImage}/>
      </FeaturedBannersContainer>
      <ProductCategoriesContainer>
        <ProductCategoryImage 
          src={productCategory.data.main_image.url} 
          alt={productCategory.data.main_image.alt}
          className={productCategoryLoaded ? 'loaded' : ''}
          onLoad={() => setProductCategoryLoaded(true)}
        />
      </ProductCategoriesContainer>
      <FeaturedProductsContainer>
        {
          featuredProducts.map(featuredProduct =>
            <div key={featuredProduct.id}>
              <FeaturedProductImage 
                src={featuredProduct.data.mainimage.url} 
                alt={featuredProduct.data.mainimage.alt}
              />
              <p>{featuredProduct.data.name}</p>
              <p>{getProductCategoryById(featuredProduct.data.category.id).name}</p>
              <p>{featuredProduct.data.price}</p>
            </div>    
          )
        }
      </FeaturedProductsContainer>      
    </>
  )
};
