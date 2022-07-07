import 'bootstrap/dist/css/bootstrap.min.css';

import {
  AddButton,
  AddQuantity,
  AddQuantityContainer,
  CarouselContainer,
  CarouselImage,
  InformationContainer,
  ProductContainer,
  ProductData,
  ProductDesciption,
  ProductDetailContainer,
  ProductField,
  ProductInformation,
  ProductName,
  Spec,
  TagsContainer,
} from './styles/ProductDetailStylesCss';
import { useContext, useEffect, useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import { ShoppingCartContext } from '../components/ShoppingCartContext';
import { Spinner } from '../components/Spinner';
import { useParams } from 'react-router-dom';
import { useProductById } from '../utils/hooks/useProductById';

export const ProductDetail = () => {
  const {dispatch} = useContext(ShoppingCartContext);

  const {productId} = useParams();
  const { data: {results: productData}, isLoading } = useProductById({productId});
  const [product, setProduct] = useState({});
  const [productQuantity, setProductQuantity] = useState(0);
  const [totalProductQuantity, setTotalProductQuantity] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      setProduct(productData[0]);
    }
    return () => setProduct({});
  }, [isLoading, productData]);

  const handleAddToCart = (e) => {
    e.preventDefault();
    setTotalProductQuantity(quantity => quantity + parseInt(productQuantity, 10));
    const action = {
      type: 'add',
      payload: {
        product,
        quantity: parseInt(productQuantity, 10),
      },
    };
    dispatch(action);
  };

  const handleProductQuantity = (e) => {
    const value = e.target.value;
    if (product?.data?.stock > totalProductQuantity) {
      setProductQuantity(value);
    }
  };

  if (isLoading) {
    return <Spinner />
  }

  if (!isLoading && !product) {
    return null;
  }
  
  return (
    <div>
      <ProductContainer>
        <ProductDetailContainer>
          <CarouselContainer>
            <Carousel>
              {
                product?.data?.images.map((productImage) => 
                  <Carousel.Item key={productImage.image.url} interval={3000}>
                    <CarouselImage
                      src={productImage.image.url}
                      alt={productImage.image.alt}
                    />
                  </Carousel.Item>
                )
              }
            </Carousel>
            <ProductField>Tags:</ProductField>
            <TagsContainer>
              {
                product?.tags?.map((tag) => (
                  <label key={tag}>{tag}</label>
                ))
              }
            </TagsContainer>
          </CarouselContainer>
          <ProductInformation>
            <ProductName>{product?.data?.name.toUpperCase()}</ProductName>
            <ProductDesciption>{product?.data?.short_description}</ProductDesciption>
            <InformationContainer>
              <ProductField>Price:</ProductField>
              <ProductField>SKU:</ProductField>
            </InformationContainer>
            <InformationContainer>
              <ProductData>$ {product?.data?.price}</ProductData>
              <ProductData>{product?.data?.sku}</ProductData>
            </InformationContainer>
            <ProductField>SLUG:</ProductField>
            <ProductData>{product?.data?.category?.slug.toUpperCase()}</ProductData>
            <ProductField>Specs: </ProductField>
            <ul>
              {
                product?.data?.specs?.map((spec) => 
                  <Spec key={spec?.spec_name}>{spec?.spec_name}: {spec?.spec_value}</Spec>
                )
              }
            </ul>
            <AddQuantityContainer>
              <form onSubmit={handleAddToCart}>
                <AddQuantity 
                  type='text' 
                  value={productQuantity ?? ''}
                  onChange={handleProductQuantity}
                />
                <AddButton 
                  disabled={
                    productQuantity > product?.data?.stock 
                    || product?.data?.stock === 0
                    || !(product?.data?.stock >= 
                      parseInt(totalProductQuantity, 10) + parseInt(productQuantity, 10))
                  }
                  type='submit'
                >
                  ADD TO CART
                </AddButton>
              </form>
            </AddQuantityContainer>
          </ProductInformation>
        </ProductDetailContainer>
      </ProductContainer>
    </div>
  )
}
