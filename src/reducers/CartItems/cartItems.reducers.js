const INITIAL_CART_ITEMS = [{ item: '', amount: '', plusminus: 0 }]
const CartItemsReducer = (state = INITIAL_CART_ITEMS, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
        
      return [...state, action.payload]
    default:
      return state
  }
}
