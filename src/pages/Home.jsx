import {
  FeaturedBannerImage,
  FeaturedBannersContainer,
  LeftArrow,
  ProductCategoriesContainer,
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
  const [productCategory, setProductCategory] = useState({});
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [productCategoryLoaded, setProductCategoryLoaded] = useState(false);

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBannersDataLoading]);

  useEffect(() => {
    if (!isProductCategoriesDataLoading) {
      setProductCategory({
        productCategories: productCategoriesData,
        selectedCategoryIndex: 0,
        selectedProductCategory: productCategoriesData[0],
      });
    }
    return () => setProductCategory({});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isProductCategoriesDataLoading]);

  useEffect(() => {
    if (!isFeaturedProductsDataLoading) {
      setFeaturedProducts([...featuredProductsData]);
    }
    return () => setFeaturedProducts([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFeaturedProductsDataLoading]);

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
  }, [productCategory]);

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
        <ProductCategoryImage 
          src={productCategory?.selectedProductCategory?.data.main_image.url} 
          alt={productCategory?.selectedProductCategory?.data.main_image.alt}
          className={productCategoryLoaded ? 'loaded' : ''}
          onLoad={() => setProductCategoryLoaded(true)}
          onClick={() => {
            navigate(`products/?category=${productCategory?.selectedProductCategory?.id}`);
          }}
        />
        <ProductCategoryName>
          {productCategory?.selectedProductCategory?.data.name}
        </ProductCategoryName>
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
