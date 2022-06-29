import {
  AddButton,
  ProductCard,
  ProductCategory,
  ProductDescriptionContainer,
  ProductImage,
  ProductListContainer,
  ProductName,
  ProductPrice,
} from './styles/ProductsGridStylesCss';

import { Link } from 'react-router-dom';
import { ShoppingCartContext } from './ShoppingCartContext';
import { useContext } from 'react';

export const ProductsGrid = ({products}) => {
  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);

  const handleAddToCart = () => {
    setShoppingCart(shoppingCart + 1);
  };

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
            <ProductCategory>
              {product.data.category.slug.toUpperCase()}
            </ProductCategory>
            <AddButton 
              type='text'
              disabled={product.data.stock === 0}
              onClick={handleAddToCart}
            >
              ADD TO CART
            </AddButton>
          </ProductCard>   
        )
      }
    </ProductListContainer>
  )
}
