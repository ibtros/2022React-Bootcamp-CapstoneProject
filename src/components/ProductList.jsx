import {
  ProductCategory,
  ProductContainer,
  ProductDescriptionContainer,
  ProductImage,
  ProductListContainer,
  ProductName,
  ProductPrice,
} from './styles/ProductListStylesCss';

import { getProductCategoryById } from '../selectors/getProductCategoryById';

export const ProductList = ({products}) => {
  return (
    <ProductListContainer>
      {
        products.map(product =>
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
    </ProductListContainer>
  )
}
