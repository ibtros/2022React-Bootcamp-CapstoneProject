import {
  ProductCard,
  ProductDescriptionContainer,
  ProductImage,
  ProductListContainer,
  ProductName,
  ProductPrice,
} from './styles/ProductListStylesCss';

import { Link } from 'react-router-dom';

// import { getProductCategoryById } from '../selectors/getProductCategoryById';

export const ProductList = ({products}) => {
  return (
    <ProductListContainer>
      {
        products.map(product =>
          <ProductCard key={product.id}>
            <ProductDescriptionContainer>
              <ProductName>{product.data.name}</ProductName>
              <ProductPrice>$ {product.data.price}</ProductPrice>
            </ProductDescriptionContainer>
            <Link to={`/products/${product.id}`}>
              <ProductImage 
                src={product.data.mainimage.url} 
                alt={product.data.mainimage.alt}
              />
            </Link> 
            {/* <ProductCategory>
              {getProductCategoryById(product?.data.category.id)?.name}
            </ProductCategory> */}
          </ProductCard>   
        )
      }
    </ProductListContainer>
  )
}
