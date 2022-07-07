import {
  Button,
  CheckoutContainer,
  CheckoutFooter,
  CustomerForm,
  OrderNotesInput,
  Total,
} from './styles/CheckoutStylesCss';

import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../components/ShoppingCartContext';
import { useContext } from 'react';

export const Checkout = () => {
  const {shoppingCartState} = useContext(ShoppingCartContext);

  const getTotal = () => {
    const totalItems = shoppingCartState.map(item => item.product.data.price * item.quantity)
      .reduce((prev, curr) => prev + curr, 0);
      
    return totalItems;
  };
  
  return (
    <div>
      <h1>Checkout</h1>
      {
        shoppingCartState.length > 0 ?
        <CheckoutContainer>
          <CustomerForm>
            <h5>Customer information: </h5>
            <input placeholder='Name' type='text' />
            <input placeholder='email' type='email' />
            <input placeholder='Zip code'/>
            <OrderNotesInput placeholder='Order notes'/>
          </CustomerForm>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {
                  shoppingCartState.map(item => (
                    <tr key={item.product.id}>
                      <td>
                        {item.product.data.name}
                      </td>
                      <td>
                        {item.quantity}
                      </td>
                      <td>
                        $ {item.quantity * item.product.data.price}
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            <CheckoutFooter>
                <div>
                  <Total>Total: $ {getTotal()}</Total>
                </div>
                <div>
                  <Button>Place Order</Button>
                  <Link to="/cart">
                    <Button>Go back to cart</Button>
                  </Link>
                </div>
            </CheckoutFooter>
          </div>
        </CheckoutContainer>
        :
        <h2>You don't have items in your cart</h2>
      }
    </div>
  )
}
