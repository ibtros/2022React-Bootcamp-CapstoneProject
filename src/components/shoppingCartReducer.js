export const shoppingCartReducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      if (state.find(item => item.product.id === action.payload.product.id)) {
        return state.map(item => { 
          return item.product.id === action.payload.product.id 
            ?
            {...item, quantity: item.quantity + action.payload.quantity}
            :
            item;
        })
      } else {
        return [...state, action.payload];
      }
    case 'remove':
      return state.filter(item => item.product.id !== action.payload);
    case 'change':
      return state.map(item => { 
        return item.product.id === action.payload.product.id 
          ?
          {...item, quantity: parseInt(action.payload.quantity, 10)}
          :
          item;
      })
    default:
      return state;
  }
}