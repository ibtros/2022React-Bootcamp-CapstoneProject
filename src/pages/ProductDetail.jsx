import { useEffect, useState } from 'react';

import { Spinner } from '../components/Spinner';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useProductById } from '../utils/hooks/useProductById';

const ProductDesciption = styled.p`
  width: 600px;
  height: auto;
`;

const ProductInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductDetail = () => {
  const {productId} = useParams();
  const { data: {results: productData}, isLoading } = useProductById({productId});
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (!isLoading) {
      setProduct(productData[0]);
    }
  }, [isLoading]);

  if (isLoading) {
    return <Spinner />
  }

  if (!isLoading && !product) {
    return null;
  }

  console.log('product: ', product);

  return (
    <div>
      <ProductInformation>
        <label>{product?.name}</label>
        <br/>
        <label>Precio: $ {product?.data?.price}</label>
        <br/>
        <label>SKU: {product?.data?.sku}</label>
        <br/>
        <label>SLUG: {product?.data?.category?.slug}</label>
        <br/>
        <h4>Etiquetas: </h4>
        {
          product?.tags?.map((tag) => (
            <label key={tag}>{tag}</label>
          ))
        }
        <ProductDesciption>{product?.short_description}</ProductDesciption>
        <br/>
        <label>Especificaciones: </label>
        <br/>
        <ul>
          {
            product?.data?.spects?.map((spect) => 
              <li>{spect?.spect_name}: {spect?.spect_value}</li>
            )
          }
        </ul>
      </ProductInformation>
    </div>
  )
}
