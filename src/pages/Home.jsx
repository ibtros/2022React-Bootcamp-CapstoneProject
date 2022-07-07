import {
  FeaturedBannerImage,
  FeaturedBannersContainer,
  LeftArrow,
  ProductCategoriesContainer,
  ProductCategoryContainer,
  ProductCategoryImage,
  ProductCategoryName,
  RightArrow,
  ViewAllProductsButton,
} from './styles/HomeStylesCss';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { ProductsGrid } from '../components/ProductsGrid';
import { Spinner } from '../components/Spinner';
import arrow from '../up-arrow-svgrepo-com.svg';
import { useFeaturedBanners } from '../utils/hooks/useFeaturedBanners';
import { useFeaturedProducts } from '../utils/hooks/useFeaturedProducts';
import { useProductCategories } from '../utils/hooks/useProductCategories';

export const Home = () => {
  const { data: {results: bannersData}, isLoading: isBannersDataLoading } = useFeaturedBanners();
  const { 
    data: {results: productCategoriesData}, 
    isLoading: isProductCategoriesDataLoading,
  } = useProductCategories();
  const { 
    data: {results: featuredProductsData}, 
    isLoading: isFeaturedProductsDataLoading,
  } = useFeaturedProducts({pageSize: 16});

  const [featuredBanner, setFeaturedBanner] = useState({});
  const [productCategories, setProductCategories] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isBannersDataLoading) {
      setFeaturedBanner({
        featuredBanners: bannersData,
        selectedBannerIndex: 0,
        selectedFeaturedBanner: bannersData[0],
      });
    }
    return () => setFeaturedBanner({});
  }, [isBannersDataLoading, bannersData]);

  useEffect(() => {
    if (!isProductCategoriesDataLoading) {
      setProductCategories([...productCategoriesData]);
    }
    return () => setProductCategories([]);
  }, [isProductCategoriesDataLoading, productCategoriesData]);

  useEffect(() => {
    if (!isFeaturedProductsDataLoading) {
      setFeaturedProducts([...featuredProductsData]);
    }
    return () => setFeaturedProducts([]);
  }, [isFeaturedProductsDataLoading, featuredProductsData]);

  const changeToNextImage = (isNextChange) => {
    const currentIndex = featuredBanner.selectedBannerIndex;
    const lastImage = featuredBanner.featuredBanners.length - 1;
    const newIndex =  isNextChange ? 
      (currentIndex === lastImage ? 0 : currentIndex + 1)
      : (currentIndex === 0 ? lastImage : currentIndex - 1);
    setFeaturedBanner({
      ...featuredBanner,
      selectedBannerIndex: newIndex,
      selectedFeaturedBanner: bannersData[newIndex],
    });
  };
  
  if (isBannersDataLoading || isFeaturedProductsDataLoading || isProductCategoriesDataLoading) {
    return <Spinner />
  }

  return (
    <>
      <FeaturedBannersContainer>
        <LeftArrow src={arrow} alt='leftArrow' onClick={() => changeToNextImage(false)}/>
        <FeaturedBannerImage
          src={featuredBanner?.selectedFeaturedBanner?.data.main_image.url}
          alt={featuredBanner?.selectedFeaturedBanner?.data.main_image.alt}
        />
        <RightArrow src={arrow} alt='rightArrow' onClick={() => changeToNextImage(true)}/>
      </FeaturedBannersContainer>     
      <ProductCategoriesContainer>
        {
          productCategories.map(productCategory => (
            <ProductCategoryContainer key={productCategory.id}>
              <ProductCategoryImage 
                src={productCategory.data.main_image.url} 
                alt={productCategory.data.main_image.alt}
                onClick={() => {
                  navigate(`products/?category=${productCategory.id}`);
                }}
              />
              <ProductCategoryName>
                {productCategory.data.name}
              </ProductCategoryName>
            </ProductCategoryContainer>
          ))
        }
      </ProductCategoriesContainer>
      <ProductsGrid products={featuredProducts} />
      <Link to="/products">
        <ViewAllProductsButton>
          VIEW ALL PRODUCTS
        </ViewAllProductsButton>
      </Link>
    </>
  )
};
