import * as mockFeaturedBanners from '../data/featured-banners.json';
import * as mockFeaturedProducts from '../data/featured-products.json';

import {
  FeaturedBannerImage,
  FeaturedBannersContainer,
  LeftArrow,
  ProductCategoriesContainer,
  ProductCategoryImage,
  ProductCategoryName,
  RightArrow,
} from './styles/HomeStylesCss';
import { useEffect, useState } from 'react';

import { ProductList } from '../components/ProductList';
import arrow from '../up-arrow-svgrepo-com.svg';
import { mockProductCategories } from '../data/product-categories';

export const Home = () => {
  const featuredProducts = mockFeaturedProducts.results;
  const [productCategory, setProductCategory] = useState({
    productCategories: mockProductCategories.results,
    selectedCategoryIndex: 0,
    selectedProductCategory: mockProductCategories.results[0],
  });
  const [featuredBanner, setFeaturedBanner] = useState({
    featuredBanners: mockFeaturedBanners.results,
    selectedBannerIndex: 0,
    selectedFeaturedBanner: mockFeaturedBanners.results[0],
  });
  const [productCategoryLoaded, setProductCategoryLoaded] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = productCategory.selectedCategoryIndex;
      const newIndex = currentIndex < productCategory.productCategories.length - 1 ?
      currentIndex + 1 : 0;
      setProductCategory({
        ...productCategory, 
        selectedProductCategory: productCategory.productCategories[newIndex],
        selectedCategoryIndex: newIndex,
      });
    }, 3000)
    return () => clearInterval(interval);
  });

  const changeToNextImage = (isNextChange) => {
    const currentIndex = featuredBanner.selectedBannerIndex;
    const lastImage = featuredBanner.featuredBanners.length - 1;
    const newIndex =  isNextChange ? 
      (currentIndex === lastImage ? 0 : currentIndex + 1)
      : (currentIndex === 0 ? lastImage : currentIndex - 1);
    setFeaturedBanner({
      ...featuredBanner,
      selectedBannerIndex: newIndex,
      selectedFeaturedBanner: featuredBanner.featuredBanners[newIndex],
    });
  };
  
  return (
    <>
      <FeaturedBannersContainer>
        <LeftArrow src={arrow} alt='leftArrow' onClick={() => changeToNextImage(false)}/>
        <FeaturedBannerImage
          src={featuredBanner.selectedFeaturedBanner.data.main_image.url} 
          alt={featuredBanner.selectedFeaturedBanner.data.main_image.alt}
        />
        <RightArrow src={arrow} alt='rightArrow' onClick={() => changeToNextImage(true)}/>
      </FeaturedBannersContainer>
      <ProductCategoriesContainer>
        <ProductCategoryImage 
          src={productCategory.selectedProductCategory.data.main_image.url} 
          alt={productCategory.selectedProductCategory.data.main_image.alt}
          className={productCategoryLoaded ? 'loaded' : ''}
          onLoad={() => setProductCategoryLoaded(true)}
        />
        <ProductCategoryName>
          {productCategory.selectedProductCategory.data.name}
        </ProductCategoryName>
      </ProductCategoriesContainer>
      <ProductList products={featuredProducts} />
    </>
  )
};
