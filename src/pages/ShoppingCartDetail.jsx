import {
  HiddenButton,
  ProductImage,
  ProductQuantityInput,
  RemoveIcon,
} from './styles/ShoppingCartStylesCss';

import removeIcon from '../remove-rubbish-svgrepo-com.svg';
import { useState } from 'react';

export const ShoppingCartDetail = ({item, handleRemoveFromCart, handleChangeProductQuantity}) => {
  const [productQuantity, setProductQuantity] = useState(item.quantity);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setProductQuantity(value);
  };
  
  const handleAdd = () => {
    if (item.product.data.stock > item.quantity) {
      setProductQuantity(quantity => parseInt(quantity, 10) + 1);
    }
  };

  const handleSubtract = () => {
    if (item.product.data.stock > item.quantity) {
      setProductQuantity(quantity => parseInt(quantity, 10) - 1);
    }
  };
  
  return (
    <tr key={item.product.id}>
      <td>
        <ProductImage 
          src={item.product.data.mainimage.url} 
          alt={item.product.data.mainimage.alt}
        />
      </td>
      <td>
        {item.product.data.name}
      </td>
      <td>
        $ {item.product.data.price}
      </td>
      <td>
        <form 
          onSubmit={(e) => handleChangeProductQuantity(e, item.product, productQuantity)}
          disabled={
            productQuantity > item.product.data.stock 
            || item.product.data.stock === 0
          }
        >
          <button 
            onClick={handleSubtract} 
            disabled={productQuantity <= 1}
          >-</button>
          <ProductQuantityInput 
            value={productQuantity}
            onChange={handleInputChange}
          />
          <button 
            onClick={handleAdd}
            disabled={
              productQuantity > item.product.data.stock 
              || item.product.data.stock === 0
            }
          >+</button>
          <HiddenButton type='submit' />
        </form>
      </td>
      <td>
        $ {item.quantity * item.product.data.price}
      </td>
      <td>
        <RemoveIcon 
          src={removeIcon} 
          alt='removeIcon' 
          onClick={() => handleRemoveFromCart(item.product)}
        />
      </td>
    </tr>
  )
}
