import {
  Button,
  ShoppingCartContainer,
  ShoppingCartTable,
  Total,
} from './styles/ShoppingCartStylesCss';

import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../components/ShoppingCartContext';
import { ShoppingCartDetail } from './ShoppingCartDetail';
import { useContext } from 'react';

export const ShoppingCart = () => {
  const {shoppingCartState, dispatch} = useContext(ShoppingCartContext);

  const handleRemoveFromCart = (product) => {
    const action = {
      type: 'remove',
      payload: product.id,
    };
    dispatch(action);
  };

  const handleChangeProductQuantity = (e, product, productQuantity) => {
    e.preventDefault();
    const action = {
      type: 'change',
      payload: {
        product: product,
        quantity: productQuantity,
      },
    };
    dispatch(action);
  };

  const getTotal = () => {
    const totalItems = shoppingCartState.map(item => item.product.data.price * item.quantity)
      .reduce((prev, curr) => prev + curr, 0);

    return totalItems;
  };
    
  return (
    <div>
      <h1>Shopping Cart</h1>
      { shoppingCartState.length > 0 ?
        <ShoppingCartContainer>
          <ShoppingCartTable>
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Unit price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Want to remove?</th>
              </tr>
            </thead>
            <tbody>
              {
                shoppingCartState.map(item => (
                  <ShoppingCartDetail 
                    key={item.product.id} 
                    item={item} 
                    handleRemoveFromCart={handleRemoveFromCart}
                    handleChangeProductQuantity={handleChangeProductQuantity}
                  />
                  )
                )
              }
            </tbody>
            <tfoot>
              <tr>
                <Total colSpan={5}>Total: $ {getTotal()}</Total>
              </tr>
            </tfoot>
          </ShoppingCartTable>
          <Link to="/checkout">
            <Button>Proceed to checkout</Button>
          </Link>
        </ShoppingCartContainer>
        :
        <h2>You don't have items in your cart</h2>
      }
    </div>
  )
}
